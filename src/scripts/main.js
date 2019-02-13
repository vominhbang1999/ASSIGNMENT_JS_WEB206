// //////////////////////////////////////////HEADER//////////////////////////////////////////\
$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('.menu-header').css({
			'background' : '#0b0d0f',
			'top':'0rem',
			'transition':'0.2s ease-in-out'
		})
	}else {
		
		$('.menu-header').css({
			'background' : 'none',
			'top':'1.5rem',
			'transition':'0.2s ease-in-out'
		})
	}
})

$(document).ready(function () {
	$('.icon-button-menu').on('click', function () {
		$('.menu-so-xuong').css({
			'transform' : 'translateY(-5%)',
		}),
		$('html body').css({
			'overflow' : 'hidden'
		});
	});
	$('.nut-x i').on('click', function () {
		$('.menu-so-xuong').css({
			'transform' : 'translateY(-105%)',
		});
		$('html body').css({
			'overflow' : 'auto'
		});
	});
});





// //////////////////////////////////////////HEADER//////////////////////////////////////////
