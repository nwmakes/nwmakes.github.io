$(document).ready(function() {
	
	var slideTime = 300;
	var lastClicked = "";
	var newColor = "#c6c7cc";
	
	$(".js-click").click(function(){
		lastClicked = $(this).attr("href").replace("#","");
		newColor = $(this).attr("data-color");
		
		if (lastClicked == "") {
			$("article").slideUp(slideTime);
			$('html, body').animate({scrollTop: "0"}, 300);
			$("article").css("min-height", "0");
			$("body").css("background-color", "#FFF");
		} else {
			$('html, body').animate({scrollTop: "800px"}, 500);
			$("article").css("min-height", "500px");
			$("article").slideUp(slideTime, function() {
				$("body").css("background-color", newColor);
				$("article").html("<img src='add_images_here/"+lastClicked+".jpg' alt=''>").slideDown(slideTime);
			});
		}
		
	})
	
	
	$(".product.saladtongs img, .product.lightbrush img, .product.aquablocks img").hover(
	function() {
		$(this).stop().animate({marginTop: "-50px", marginBottom: "50px",}, 200 );
		$(this).parent().find(".shadow").stop().animate({marginBottom: "-10px"}, 200 );
	}, function() {
		$(this).stop().animate({marginTop: "0px", marginBottom: "0px",}, 200 );
		$(this).parent().find(".shadow").stop().animate({marginBottom: "0px"}, 200 );
	}
	);
	
	
	
	function preload(arrayOfImages) {
		$(arrayOfImages).each(function(){
			$('<img/>')[0].src = this;
			// Alternatively you could use:
			// (new Image()).src = this;
		});
	}

	preload([
		'add_images_here/2d.jpg',
		'add_images_here/3d.jpg',
		//'add_images_here/4d.jpg',
		//'add_images_here/aquablocks.jpg',
		//'add_images_here/lightbrush.jpg',
		//'add_images_here/saladtongs.jpg'
	]);
	
	
});