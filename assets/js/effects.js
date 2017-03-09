$('.navbar').localScroll();

$(document).ready(function(){
	var scroll_start = 0;
	var startchange = $('#headerwrap');
	var offset = startchange.offset();
	if (startchange.length){
		$(document).scroll(function() {
			scroll_start = $(this).scrollTop();
			if(scroll_start > offset.top) {
				$(".navbar-default").css('background-color', 'transparent');
			}
		});
	}
});

$(document).ready(function(){
	var scroll_start = 0;
	var startchange = $('#recentProjects');
	var offset = startchange.offset();
	if (startchange.length){
		$(document).scroll(function() {
			scroll_start = $(this).scrollTop();
			if(scroll_start > offset.top) {
				$(".navbar-default").css('background-color', '#ffffff');
			}
		});
	}
});

$('.parallax-window').parallax({imageSrc: 'assets/img/wallpaperNature.jpg'});

$('.parallax-window-about').parallax({imageSrc: 'assets/img/aboutBW.jpg'});




