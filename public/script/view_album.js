$(document).ready(function(){
	$.getScript("additional_funcs.js", function(){
	   console.log("additional_funcs.js loaded.");
	   setBackgroundGifs();
	});

	let album_title = getUrlParameter('title');

	if (typeof album_title === 'undefined'){
		// INVALID URL PAGE DISPLAY
	}
	else {
		setAlbumInfo(deUrlString(album_title));
	}
});



function setAlbumInfo(a_title){
	$.ajax({
        type: 'get',
        dataType: 'json',
        url: '/getAlbumFromDb',
        data: {
        	title: a_title
        },
        success: function (result) {
            
            //console.log(result);

            if(result.length == 0){
            	setInvalidAlbumPage(a_title);
            }
            else {
            	let tracklist_call = $.ajax({
			        type: 'get',
			        dataType: 'json',
			        url: 'http://musicbrainz.org/ws/2/recording/?query=rgid:'+result[0].mb_id+'%20AND%20NOT%20comment:clean&offset=0&fmt=json'
			    });
	            
			    let wiki_call = $.ajax({
			        type: 'get',
			        dataType: 'json',
			        url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&pageids='+result[0].wiki_id
			    });

			    let art_call = $.ajax({
			    	type: 'get',
			    	dataType: 'json',
			    	url: 'http://coverartarchive.org/release-group/'+result[0].mb_id
			    });

			    $.when(tracklist_call, wiki_call, art_call).done(function(t_list_res, wiki_res, art_res){

			    	let track_amt   = 0;
			    	let description = "";
			    	let image_href  = "";
			    	let comment     = result[0].comments;
			    	let tracklist   = Array();

			    	if(wiki_res[1] == "success"){
			    		//console.log(wiki_res[0].query.pages[result[0].wiki_id].extract);
			    		description = wiki_res[0].query.pages[result[0].wiki_id].extract;
			    	}
			    	else {
			    		// Error getting album info
			    		console.log("Error getting album wiki info: Error retrieving from wikipedia.");
			    	}


			    	if(art_res[1] == "success"){
			    		if(art_res[0].images.length > 0){
			    			//console.log(art_res[0].images[0]);
			    			image_href = art_res[0].images[0].image;
			    		}
			    		else {
			    			// No album art specified for this album
			    			console.log("Error getting cover art: No art specified for this album.");
			    		}
			    	}
			    	else {
			    		// Error getting album art
			    		console.log("Error getting cover art: Error retrieving from database.");
			    	}

			    	if(t_list_res[1] == "success"){
			    		console.log(t_list_res[0]);
			    		track_amt = t_list_res[0].count;

			    		// set headers
			    		$("#album_tracklist_table").html("<tr><th colspan='4'>"+a_title+" Tracklist</th></tr>");
			    		$("#album_tracklist_table").append("<tr><th>#</th><th>Title</th><th>Artist(s)</th><th>Length</th></tr>");

			    		//  Get all of the tracks.. must append to browser as we cant save data outwards from the ajax calls
			    		let call_amt = Math.floor(track_amt / 25);
			    		for(let i = 0; i <= call_amt; i++){

			    			let offset = (i * 25);

			    			$cur_tlist_call = $.ajax({
						        type: 'get',
						        dataType: 'json',
						        url: 'http://musicbrainz.org/ws/2/recording/?query=rgid:'+result[0].mb_id+'%20AND%20NOT%20comment:clean&offset='+offset+'&fmt=json'
						    });

						    $.when($cur_tlist_call).done(function(curRes){
						    	
					    		for(let j = 0; j < curRes.recordings.length; j++){
					    			let track_len = getTrackLenStr(curRes.recordings[j].length);
					    			let artists   = getArtistStr(curRes.recordings[j]['artist-credit']);
					    			let row = "<tr><td>"+(offset + j + 1)+"</td><td>"+curRes.recordings[j].title+"</td><td>"+artists+"</td><td>"+track_len+"</td></tr>";
					    			$("#album_tracklist_table").append(row);
					    		}
					    		//console.log("Error getting tracklist: Error in tracklist retrieval iteration.");
					    		//console.log(curRes);
						    });
			    		}
			    	}
			    	else {
			    		// Error getting track list
			    		console.log("Error getting track list: Error retrieving from database.");
			    	}


			    	$("#album_info_table").html("<tr><td rowspan='2'><img class='album_img' src='"+image_href+"'></td><td id='title_cell'><span id='album_title' class='title_glow'>"+a_title+"</span</td></tr>");
					$("#album_info_table").append("<tr><td><p id='album_desc'>"+description+"</p></td></tr>");

					if(comment != null){
						$("#album_info_table").append("<tr><td colspan='2'><p id='album_comment'><b>My Comments:</b><br>"+comment+"</p></td></tr>");
					}
					else {
						$("#album_info_table").append("<tr><td colspan='2'><p id='album_comment'><b>My Comments:</b><br>I have no comment on this album... yet.</p></td></tr>");
					}
			    });
            }

        }, 
        fail: function(error) {
        	console.log(error);
        }
    });
}

function setInvalidAlbumPage(req_name){

	let image_href = '/assets/unknown_album.png';

	let description = "This album is not in my database yet. If you would like more information on this album it can be found <a target='_blank' href='https://musicbrainz.org/search?query="+prepStringForUrl(req_name)+"&type=release_group&method=indexed'>in the Musicbrainz Database.</a>";

	$("#album_info_table").html("<tr><td rowspan='2'><img class='album_img' src='"+image_href+"'></td><td><span class='album_title'>"+req_name+"</span</td></tr>");
	$("#album_info_table").append("<tr><td><p class='album_desc'>"+description+"</p></td></tr>");

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
		artist_str += "<a href='view_artist?name="+prepStringForUrl(artist_credit_obj[i].artist.name)+"'>"+artist_credit_obj[i].artist.name+"</a>";
		if(i < artist_credit_obj.length - 1){
			artist_str += artist_credit_obj[i].joinphrase;
		}
	}
	return artist_str;
}