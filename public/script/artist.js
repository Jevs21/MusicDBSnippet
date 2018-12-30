$(document).ready(function(){
	$.getScript("additional_funcs.js", function(){
	   console.log("additional_funcs.js loaded.");
	   setBackgroundGifs();
	});
	//init
	setGenreOptions();
	setContent(true);

	$("#sort_button").click(function(){
		setContent(false);
	});

});

function setContent(init){

	let query = "";

	if(init){
		query = "SELECT ARTIST.name, GENRE.name AS g_name, ARTIST.rating  FROM ARTIST INNER JOIN GENRE ON ARTIST.genre_id=GENRE.id ORDER BY rating DESC LIMIT 30";
	}
	else {
		query = createSortQuery();
	}

	$.ajax({
        type: 'get',
        dataType: 'json',
        url: '/getArtistPageContent',
        data: {
        	q: query
        },
        success: function (result) {
            console.log(result);
            $("#content_table").html("<tr><th>Name</th><th>Genre</th><th>Rating</th></tr>");

            for(let i = 0; i < result.length; i++){
            	$("#content_table").append("<tr><td><a href='view_artist?name="+prepStringForUrl(result[i].name)+"'>"+result[i].name+"</a></td><td>"+result[i].g_name+"</td><td>"+result[i].rating+"</td></tr>");
            }
        }, 
        fail: function(error) {
        	console.log(error);
        }
    });
}

function createSortQuery(){
	let sort = $("#artist_sort_dropdown").val();
	let genre = $("#artist_genre_dropdown").val();

	let query = "SELECT ARTIST.name, GENRE.name AS g_name, ARTIST.rating FROM ARTIST INNER JOIN GENRE ON ARTIST.genre_id=GENRE.id";

	if(genre === 'rap'){
		query += " WHERE GENRE.name='Rap'";
	}
	else if(genre === 'rock'){
		query += " WHERE GENRE.name='Rock'";
	}
	else if(genre === 'r&b'){
		query += " WHERE GENRE.name='R&B'";
	}


	if(sort === 'rating_hi_lo'){
		query += " ORDER BY ARTIST.rating DESC";
	}
	else if(sort === 'rating_lo_hi'){
		query += " ORDER BY ARTIST.rating ASC";
	}
	else if(sort === 'artist_a_z'){
		query += " ORDER BY ARTIST.name ASC";
	}
	else if(sort === 'artist_z_a'){
		query += " ORDER BY ARTIST.name DESC";
	}

	query += " LIMIT 30";

	return query;
}

function setGenreOptions(){
	$.ajax({
        type: 'get',
        dataType: 'json',
        url: '/getAllGenres',
        success: function (result) {
            console.log(result);
            $("#artist_genre_dropdown").html("<option value='all'>All</option>");

            for(let i = 0; i < result.length; i++){
            	$("#artist_genre_dropdown").append("<option value='"+result[i].name.toLowerCase()+"'>"+result[i].name+"</option>");
            }
        }, 
        fail: function(error) {
        	console.log(error);
        }
    });
}


function deUrlString(str){
	return str.replace(/%20/g, ' ');
}
function prepStringForUrl(str){
	return (str.replace(/\s+/g, '%20'));
}