
$(document).ready(function() {
	$.getScript("additional_funcs.js", function(){
	   console.log("additional_funcs.js loaded.");
	   setBackgroundGifs();
	});

	// INIT
	setTopContentTable("RecentAlbums");

	

	$(".top_content_tab").click(function(){
		console.log(this.attributes.value.nodeValue + " clicked.");
		setTopContentTable(this.attributes.value.nodeValue);
	});
	
    
});

function setTopContentTable(option){
	if(option == 'RecentAlbums'){
		$.ajax({
	        type: 'get',
	        dataType: 'json',
	        url: '/getRecentAlbumsList',
	        success: function (result) {
	            console.log(result);
	            $("#top_content_table").html("<tr><th>Album Title</th><th>Artist</th><th>Release Date</th></tr>");
	            for(let i = 0; i < result.length; i++){
	            	$("#top_content_table").append("<tr><td><a href='view_album?title="+result[i].title+"'>"+result[i].title+"</a></td><td><a href='view_artist?name="+result[i].name+"'>"+result[i].name+"</a></td><td>"+result[i].release_date+"</td></tr>")
	            }
	        }, 
	        fail: function(error) {

	        }
	    });
	}
	else if(option == 'MyList'){
		$.ajax({
	        type: 'get',
	        dataType: 'json',
	        url: '/getMyList',
	        success: function (result) {
	            console.log(result);
	            $("#top_content_table").html("<tr><th>Album Title</th><th>Artist</th><th>Release Date</th></tr>");
	            for(let i = 0; i < result.length; i++){
	            	$("#top_content_table").append("<tr><td>"+result[i].title+"</td><td><a href='view_artist?name="+result[i].name+"'>"+result[i].name+"</a></td><td>"+result[i].release_date+"</td></tr>")
	            }
	        }, 
	        fail: function(error) {

	        }
	    });
	}
	else if(option == 'TopAlbums'){
		$.ajax({
	        type: 'get',
	        dataType: 'json',
	        url: '/getTopAlbumsList',
	        success: function (result) {
	            console.log(result);
	            $("#top_content_table").html("<tr><th>Album Title</th><th>Artist</th><th>Release Date</th><th>Rating</th></tr>");
	            for(let i = 0; i < result.length; i++){
	            	$("#top_content_table").append("<tr><td>"+result[i].title+"</td><td><a href='view_artist?name="+result[i].name+"'>"+result[i].name+"</a></td><td>"+result[i].release_date+"</td><td>"+result[i].rating+"</td></tr>")
	            }
	        }, 
	        fail: function(error) {

	        }
	    });
	}
	else if(option == 'TopArtists'){
		$.ajax({
	        type: 'get',
	        dataType: 'json',
	        url: '/getTopArtistsList',
	        success: function (result) {
	            console.log(result);
	            $("#top_content_table").html("<tr><th>Album Title</th><th>Artist</th><th>Rating</th></tr>");
	            for(let i = 0; i < result.length; i++){
	            	$("#top_content_table").append("<tr><td>"+prepStringForUrl(result[i].title)+"</td><td><a href='view_artist?name="+result[i].name+"'>"+result[i].name+"</a></td><td>"+result[i].rating+"</td></tr>")
	            }
	        }, 
	        fail: function(error) {

	        }
	    });
	}
	else {
		console.log("Invalid option for setTopContentTable()");
	}
}

function prepStringForUrl(str){
	return str.replace(/\s+/g, '%20');
}





