$(document).ready(function(){
	$('.modal-link').click(function(){
		$('.modal').show();
        $("body").toggleClass("overflow");
	});
	$('.modal .close').click(function(){
		$('.modal').hide();
        $("body").removeClass("overflow");
	})
})
$('html, body').animate( { scrollTop: 0 }, 'medium');