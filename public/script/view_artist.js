$(document).ready(function(){
	$.getScript("additional_funcs.js", function(){
	   console.log("additional_funcs.js loaded.");
	   setBackgroundGifs();
	});

	let artist_title = getUrlParameter('name');

	if (typeof artist_title === 'undefined'){
		// INVALID URL PAGE DISPLAY
	}
	else {
		setArtistInfo(deUrlString(artist_title));
	}
});



function setArtistInfo(a_title){
	$.ajax({
        type: 'get',
        dataType: 'json',
        url: '/getArtistFromDb',
        data: {
        	name: a_title
        },
        success: function (result) {
            
            // console.log(result);

            if(result.length == 0){
            	setInvalidArtistPage(a_title);
            }
            else {
            	let album_list_call = $.ajax({
			        type: 'get',
			        dataType: 'json',
			        url: '/getArtistAlbumsFromDb',
			        data: {
			        	artist_id: result[0].id
			        }
			    });
	            
			    let wiki_call = $.ajax({
			        type: 'get',
			        dataType: 'json',
			        url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&pageids='+result[0].wiki_id
			    });

			    let img_call = $.ajax({
			    	type: 'get',
			        dataType: 'json',
			    	url: 'https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&piprop=original&format=json&origin=*&pageids='+result[0].wiki_id
			    });

			    $.when(album_list_call, wiki_call, img_call).done(function(a_list_res, wiki_res, img_res){

			    	let track_amt   = 0;
			    	let description = "";
			    	let image_href  = "";

			    	if(wiki_res[1] == "success"){
			    		//console.log(wiki_res[0]);
			    		description = wiki_res[0].query.pages[result[0].wiki_id].extract;
			    	}
			    	else {
			    		// Error getting artist info
			    		console.log("Error getting artist wiki info: Error retrieving from wikipedia.");
			    	}

			    	if(a_list_res[1] == "success"){
			    		//console.log(a_list_res[0]);

			    		// set headers
			    		$("#artist_album_table").html("<tr><th colspan='4'>"+a_title+"'s Albums</th></tr>");
			    		$("#artist_album_table").append("<tr><th>Title</th><th>Album Type</th><th>Release Date</th><th>Rating</th></tr>");

			    		for(let i = 0; i < a_list_res[0].length; i++){
			    			if(a_list_res[0][i].type == "Studio Album"){
			    				let row = "<tr><td><a href='view_album?title="+prepStringForUrl(a_list_res[0][i].title)+"'>"+a_list_res[0][i].title+"</a></td><td>"+a_list_res[0][i].type+"</td><td>"+dateToStr(a_list_res[0][i].release_date)+"</td><td>"+a_list_res[0][i].rating+"</td></tr>";
			    				$("#artist_album_table").append(row);
			    			}
			    		}

			    		for(let i = 0; i < a_list_res[0].length; i++){
			    			if(a_list_res[0][i].type == "Mixtape/Street"){
			    				let row = "<tr><td><a href='view_album?title="+prepStringForUrl(a_list_res[0][i].title)+"'>"+a_list_res[0][i].title+"</a></td><td>"+a_list_res[0][i].type+"</td><td>"+dateToStr(a_list_res[0][i].release_date)+"</td><td>"+a_list_res[0][i].rating+"</td></tr>";
			    				$("#artist_album_table").append(row);
			    			}
			    		}

			    		for(let i = 0; i < a_list_res[0].length; i++){
			    			if(a_list_res[0][i].type != "Mixtape/Street" && a_list_res[0][i].type != "Studio Album"){
			    				let row = "<tr><td><a href='view_album?title="+prepStringForUrl(a_list_res[0][i].title)+"'>"+a_list_res[0][i].title+"</a></td><td>"+a_list_res[0][i].type+"</td><td>"+dateToStr(a_list_res[0][i].release_date)+"</td><td>"+a_list_res[0][i].rating+"</td></tr>";
			    				$("#artist_album_table").append(row);
			    			}
			    		}
			    	}
			    	else {
			    		// Error getting track list
			    		console.log("Error getting album list: Error retrieving from database.");
			    	}

			    	
			    	if(img_res[1] == "success"){
			    		//console.log(img_res[0]);
			    		image_href = img_res[0].query.pages[result[0].wiki_id].original.source;
			    	}
			    	else {
			    		// Error getting artist img
			    		console.log("Error getting artist image: Error retrieving from wikipedia.");
			    	}

			    	$("#artist_info_table").html("<tr><td rowspan='2'><img class='artist_img' src='"+image_href+"'></td><td><span id='artist_title' class='title_glow'>"+a_title+"</span</td></tr>");
					$("#artist_info_table").append("<tr><td><p id='artist_desc'>"+description+"</p></td></tr>");
			    });
            }

            
        }, 
        fail: function(error) {
        	console.log(error);
        }
    });
}

function setInvalidArtistPage(req_name){

	let image_href = '/assets/unknown_artist.jpeg';

	let description = "This artist is not in my database yet. If you would like more information on this artist it can be found <a target='_blank' href='https://musicbrainz.org/search?query="+prepStringForUrl(req_name)+"&type=artist&method=indexed'>in the Musicbrainz Database.</a>";

	$("#artist_info_table").html("<tr><td rowspan='2'><img class='artist_img' src='"+image_href+"'></td><td><span class='artist_title'>"+req_name+"</span</td></tr>");
	$("#artist_info_table").append("<tr><td><p class='artist_desc'>"+description+"</p></td></tr>");

}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function dateToStr(date){
	let str   = "";
	let year  = "";
	let month = "";
	let day   = "";
	let parts = date.split('-');

	if(parts.length != 3){
		str = date;
	}
	else {
		year = parts[0];
		day  = parts[2];

		if(parts[1] == '01'){
			month = "January";
		}
		else if(parts[1] == '02'){
			month = "Febuary";
		}
		else if(parts[1] == '03'){
			month = "March";
		}
		else if(parts[1] == '04'){
			month = "April";
		}
		else if(parts[1] == '05'){
			month = "May";
		}
		else if(parts[1] == '06'){
			month = "June";
		}
		else if(parts[1] == '07'){
			month = "July";
		}
		else if(parts[1] == '08'){
			month = "August";
		}
		else if(parts[1] == '09'){
			month = "September";
		}
		else if(parts[1] == '10'){
			month = "October";
		}
		else if(parts[1] == '11'){
			month = "November";
		}
		else if(parts[1] == '12'){
			month = "December";
		}
		else {
			console.log("Invalid date in dateToStr().");
		}

		str = month + " " + day + ", " + year;
	}

	
	return str;

}

function deUrlString(str){
	return str.replace(/%20/g, ' ');
}
function prepStringForUrl(str){
	let ret = (str.replace(/\s+/g, '%20'));
	return ret;
}

function getTrackLenStr(ms){
	let minutes = Math.floor(ms / 60000)
	let remains = ms % 60000;
	let seconds = Math.floor(remains / 1000);
	let len_str = "";
	if(seconds < 10){
		len_str = minutes + ":0" + seconds;
	}
	else {
		len_str = minutes + ":" + seconds;
	}
	return len_str;
}

function getArtistStr(artist_credit_obj){
	let artist_str = "";
	for(let i = 0; i < artist_credit_obj.length; i++){
		artist_str += "<a href='view_artist?"+prepStringForUrl(artist_credit_obj[i].artist.name)+"'>"+artist_credit_obj[i].artist.name+"</a>";
		if(i < artist_credit_obj.length - 1){
			artist_str += artist_credit_obj[i].joinphrase;
		}
	}
	return artist_str;
}