function setBackgroundGifs(){
	// let window_y = $(window).height();
	// $(".gif_slot").height(window_y);

	var pathname = window.location.pathname;

	let slot_x = $(".gif_slot").width();

	let num = Math.floor(Math.random() * (5-0) + 0);
    console.log("Logo: \"/assets/logo"+num+".gif\"");
    $("#title_container").html("<a href='/'><img id='logo' src='/assets/logo"+num+".gif'></a>");
    let logo_x = 1024;
    let logo_spot_x = $("#title_container").width();
    console.log("logo_x: " + logo_x + ", logo_spot_x: "+logo_spot_x);
	if(logo_x >= logo_spot_x){
		console.log("Resizing logo. ("+logo_x+")->("+logo_spot_x+")");
		$("#logo").css('width', (logo_spot_x - 20) + 'px');
	}

	if(pathname == '/'){
		console.log("INDEX: " + pathname);
		$.ajax({
	        type: 'get',
	        dataType: 'json',
	        url: '/getGifList',
	        success: function (result) {
	            console.log(result);

	            let ind = 0;
	            $(".gif_slot").each(function(i, obj){
	            	$(this).html("");
	            	for(let j = 0; j < 3; j++){

	            		let img_x = 0;

	            		if(i == 0){
	            			$(this).append("<img id='gif_left_"+j+"' class='gif_img' src='/assets/"+result[ind].filename+"'><br><br><br>");
	            			img_x = $("#gif_left_"+j).width();

	            			if(img_x >= slot_x){
	            				$("#gif_left_"+j).css('width', (slot_x - 20) + 'px');
	            			}
	            		}
	            		else {
	            			$(this).append("<img id='gif_right_"+j+"' class='gif_img' src='/assets/"+result[ind].filename+"'><br><br><br>");
	            			img_x = $("#gif_right_"+j).width();

	            			if(img_x >= slot_x){
	            				$("#gif_right_"+j).css('width', (slot_x - 20) + 'px');
	            			}

	            		}
	            		ind += 1;

	            		//style='width:"++";height:auto;'
	            	}
				});
	        }, 
	        fail: function(error) {
	        	console.log(error);
	        }
	    });
	}
	else {
		$.ajax({
	        type: 'get',
	        dataType: 'json',
	        url: '/getGifList',
	        success: function (result) {
	            //console.log(result);
	            let bot_gif_num = Math.floor(Math.random() * (result.length-0) + 0);
	            $("#bottom_gif_container").html("<img id='bottom_gif' src='/assets/"+result[bot_gif_num+1].filename+"'>");	            
	        }, 
	        fail: function(error) {
	        	console.log(error);
	        }
	    });

		if(pathname == '/view_artist' || pathname == 'view_album'){
			console.log("NOT INDEX: " + pathname);
			// Code to change the album title/artist name text's glow based on title colour
			// 0 -> Cyan
			// 1 -> Red
			// 2 -> Green (swamp)
			// 3 -> Pink
			// 4 -> Blue
			let glow_colour = "";

			if(num == 0){
				glow_colour = "#B0E4EC";
			} 
			else if(num == 1){
				glow_colour = "#FB98A7";
			}
			else if(num == 2){
				glow_colour = "#B7CB73";
			}
			else if(num == 3){
				glow_colour = "#E2ABD5";
			}
			else if(num == 4){
				glow_colour = "#8A9FD5";
			}
			else {
				console.log("Error creating title glow. {num} out of range.");
			}

			$("head").append("<style>.title_glow { text-shadow: 0px 0 20px "+glow_colour+", 2px 0 2px "+glow_colour+", -2px 0 2px "+glow_colour+", 0 2px 2px "+glow_colour+", 0 -2px 2px "+glow_colour+"; }</style>");
		}
		else {
			console.log("NOT INDEX: " + pathname);
		}
	}


	
}