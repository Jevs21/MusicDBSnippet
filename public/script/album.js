$(document).ready(function(){
	$.getScript("additional_funcs.js", function(){
	   console.log("additional_funcs.js loaded.");
	   setBackgroundGifs();
	});
	

	//init
	setContent(true);

	$("#sort_button").click(function(){
		setContent(false);
	});

});

function setContent(init){

	let query = "";

	if(init){
		query = "SELECT * FROM ALBUM INNER JOIN ARTIST ON ALBUM.artist_id=ARTIST.id ORDER BY ALBUM.release_date DESC LIMIT 30";
	}
	else {
		query = createSortQuery();
	}

	$.ajax({
        type: 'get',
        dataType: 'json',
        url: '/getAlbumPageContent',
        data: {
        	q: query
        },
        success: function (result) {
            console.log(result);
            $("#content_table").html("<tr><th>Title</th><th>Artist</th><th>Type</th><th>Release Date</th><th>Rating</th></tr>");

            for(let i = 0; i < result.length; i++){
            	$("#content_table").append("<tr><td><a href='view_album?title="+prepStringForUrl(result[i].title)+"'>"+result[i].title+"</a></td><td><a href='view_artist?name="+prepStringForUrl(result[i].name)+"'>"+result[i].name+"</a></td><td>"+result[i].type+"</td><td>"+dateToStr(result[i].release_date)+"</td><td>"+result[i].rating+"</td></tr>");
            }
        }, 
        fail: function(error) {
        	console.log(error);
        }
    });
}

function createSortQuery(){
	let sort = $("#album_sort_dropdown").val();
	let type = $("#album_type_dropdown").val();

	let query = "SELECT * FROM ALBUM INNER JOIN ARTIST ON ALBUM.artist_id=ARTIST.id";

	if(type === 'studio'){
		query += " WHERE type='Studio Album'";
	}
	else if(type === 'mixtape'){
		query += " WHERE type='Mixtape/Street'";
	}
	else if(type === 'other'){
		query += " WHERE type!='Studio Album' AND type!='Mixtape/Street'";
	}


	if(sort === 'release_date_new_old'){
		query += " ORDER BY ALBUM.release_date DESC";
	}
	else if(sort === 'release_date_old_new'){
		query += " ORDER BY ALBUM.release_date ASC";
	}
	else if(sort === 'album_a_z'){
		query += " ORDER BY ALBUM.title ASC";
	}
	else if(sort === 'album_z_a'){
		query += " ORDER BY ALBUM.title DESC";
	}
	else if(sort === 'rating_hi_lo'){
		query += " ORDER BY ALBUM.rating DESC";
	}
	else if(sort === 'rating_lo_hi'){
		query += " ORDER BY ALBUM.rating ASC";
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
	return (str.replace(/\s+/g, '%20'));
}