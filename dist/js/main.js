'use strict';

eval(function (p, a, c, k, _e, r) {
	_e = function e(c) {
		return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};if (!''.replace(/^/, String)) {
		while (c--) {
			r[_e(c)] = k[c] || _e(c);
		}k = [function (e) {
			return r[e];
		}];_e = function _e() {
			return '\\w+';
		};c = 1;
	};while (c--) {
		if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
	}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|VsO1IE1pbmggQuG6sW5nIC0gMDg0MzUyNjIwCkVtYWlsOiB2b21pbmhiYW5nMTk5OUBnbWFpbC5jb20KRmFjZWJvb2s6IGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9iYW5nLnZvLjM5Mzk1||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});

$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('.menu-header').css({
			'background': '#0b0d0f',
			'top': '0rem',
			'transition': '0.2s ease-in-out'
		});
	} else {

		$('.menu-header').css({
			'background': 'none',
			'top': '1.5rem',
			'transition': '0.2s ease-in-out'
		});
	}
});
$(document).ready(function () {
	$('.icon-button-menu').on('click', function () {
		$('.menu-so-xuong').css({
			'transform': 'translateY(-5%)'
		}), $('html body').css({
			'overflow': 'hidden'
		});
	});
	$('.nut-x i').on('click', function () {
		$('.menu-so-xuong').css({
			'transform': 'translateY(-105%)'
		});
		$('html body').css({
			'overflow': 'auto'
		});
	});
});

// PHÂN TRANG

$(document).ready(function () {
	// biến hiển thị số lượng sản phẩm trên 1 trang
	var sl_sp_tren_mot_trang = parseInt(8);
	//biến lấy tổng số lượng sản phẩm
	var tong_sl_sp = parseInt($('.product-colum-one .all-product').children().length);

	// biến tính có bao nhiêu trang
	var sl_page = Math.ceil(tong_sl_sp / sl_sp_tren_mot_trang);

	$('#current_page').val(0);
	$('#show_per_page').val(sl_sp_tren_mot_trang);

	//hiển thị nút prev
	var link = '<a class="prev-link" href="javascript:lui();"><i class="fas fa-chevron-left"></i></a>';

	// Hiển thị số trang bằng vòng lặp
	for (var link_tam = 0; sl_page > link_tam; link_tam++) {
		link = link + '<a class="page-link" href="javascript:go_page(' + link_tam + ');" longdesc="' + link_tam + '">' + (link_tam + 1) + '</a>';
	}

	// hiển thị nút next
	link = link + '<a class="next-link" href="javascript:toi();"><i class="fas fa-chevron-right"></i></a>';

	// Hiển thị ra trang html
	$('#page-navigation').html(link);

	$('#page-navigation .page-link:first').addClass('active_page');

	$('.product-colum-one').children().css({ 'display': 'none' });

	$('.product-colum-one').children().slice(0, sl_sp_tren_mot_trang).css({ 'display': 'block' });
});
// Hàm prev
function lui() {

	var new_page = parseInt($('#current_page').val()) - 1;

	if ($('.active_page').prev('.page-link').length == true) {
		go_page(new_page);
	}
}
// hàm next
function toi() {
	var new_page = parseInt($('#current_page').val()) + 1;

	if ($('.active_page').next('.page-link').length == true) {
		go_page(new_page);
	}
}
function go_page(e) {

	var sl_sp_tren_mot_trang = parseInt($('#show_per_page').val());

	var bacdau = parseInt(e * sl_sp_tren_mot_trang);
	console.log(bacdau);
	var ketthuc = parseInt(sl_sp_tren_mot_trang + bacdau);
	console.log(ketthuc);

	$('.product-colum-one').children().css({ 'display': 'none' }).slice(bacdau, ketthuc).css({ 'display': 'block' });

	$('.page-link[longdesc=' + e + ']').addClass('active_page').siblings('.active_page').removeClass('active_page');

	$('#current_page').val(e);
	console.log(e);
}

// GỌI CHỨC NĂNG GIỎ HÀNG TỪ PLUGIN JQUERY
$(document).ready(function () {
	var item = 0;
	var gia_bac_dau = 0;

	$('.product-details figcaption button.sc-add-to-cart').click(function (e) {
		item++;
		var gia_sp = parseInt($(this).attr('data-price'));
		gia_bac_dau += gia_sp;

		$(this).parents('.all-product').find('.product-details').clone().appendTo(".info-shoping").append('<i id="remove-sp" class="far fa-times-circle"></i>');

		$('.shopping-cart .Item a span').text(item);
		$('.shopping-cart .Total a span').text(gia_bac_dau + '.00 $');
	});

	$('.info-shoping').on('click', '#remove-sp', function () {
		item--;
		$(this).parent().remove();
		$('.shopping-cart .Item a span').text(item);
		var gia_sp_remove = parseInt($(this).parents('.product-details').find('button.sc-add-to-cart').attr('data-price'));
		gia_bac_dau -= gia_sp_remove;
		$('.shopping-cart .Total a span').text(gia_bac_dau + '$');
	});
});

$(document).ready(function () {
	$('.load').delay(4000).fadeOut(400);
});

$(window).scroll(function () {
	if ($(window).scrollTop() > 35) {
		$('body').css({
			'overflow-x': 'hidden'
		});
		$('.hieuungani1').addClass('animated   fadeInRight');
	} else if ($(window).scrollTop() < 35) {
		$('.hieuungani1').removeClass('animated  fadeInRight');
	}
});
$(window).scroll(function () {
	if ($(window).scrollTop() > 1200) {
		$('body').css({
			'overflow-x': 'hidden'
		});
		$('.hieuungani2').addClass('animated  fadeInLeft');
	} else if ($(window).scrollTop() < 1200) {
		$('.hieuungani2').removeClass('animated  fadeInLeft');
	}
});
$(window).scroll(function () {
	if ($(window).scrollTop() > 1800) {
		$('body').css({
			'overflow-x': 'hidden'
		});
		$('.hieuungani3').addClass('animated  fadeInRight');
	} else if ($(window).scrollTop() < 1800) {
		$('.hieuungani3').removeClass('animated  fadeInRight');
	}
});

$('.slider1').owlCarousel({
	loop: true,
	nav: true,
	autoplay: true,
	autoplayTimeout: 6000,
	smartSpeed: 450,
	animateIn: 'flipInX',
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
});
$('.slider2').owlCarousel({
	loop: true,
	dots: false,
	nav: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
});
//# sourceMappingURL=main.js.map
