$(function() {

	new WOW().init();

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.mnu_top').slideDown(300);
		}else{
			$('.mnu_top').slideUp(300);
		}
	});

});