
$('.slider1').owlCarousel({
	loop:true,
	nav:true,
	autoplay:true,
	autoplayTimeout: 6000,
	smartSpeed: 450,
	animateIn: 'flipInX',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.slider2').owlCarousel({
	loop:true,
	dots: false,
	nav:true,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
