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
// //////////////////////////////////////////HEADER//////////////////////////////////////////\
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

// //////////////////////////////////////////HEADER//////////////////////////////////////////


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
//# sourceMappingURL=main.js.map
