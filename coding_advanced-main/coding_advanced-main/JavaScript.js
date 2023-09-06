// スライド
var windowWidth = $(window).width();
var windowSm = 480;
if (windowWidth <= windowSm) {
//横幅480px以下（スマホ）に適用させるJavaScript
var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	  },
	loop: true,
	autoHeight: true,
	slidesPerView: 1,
	spaceBetween: 0,
	initialSlide: 1,
	autoplay: {
		delay: 5000,
        el: 'swiper-pagination',
        type: 'bullets',
		disableOnInteraction: false,
	},
});
} else {
//横幅480px以上（PC、タブレット）に適用させるJavaScript
var swiper = new Swiper('.swiper', {
    slidesPerView: 2,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	  },
	loop: true,
	autoHeight: true,
	slidesPerView: 2,
	spaceBetween: 0,
	initialSlide: 1,
	autoplay: {
		delay: 5000,
        el: 'swiper-pagination',
        type: 'bullets',
		disableOnInteraction: false,
	},
});

}


// フェードイン

$(function(){
	$(window).scroll(function (){
	  $('.js-fade').each(function(){
		var pos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > pos - windowHeight + 100){
		  $(this).addClass('scroll');
		}
	  });
	});
  });

// 表示非表示
// ハンバーガーメニュー
$(function(){
    $('.drawer_open').on('click', function(){
      $('.' + $(this).data('slide-menu')).slideToggle(700);
      $('.' + $(this).data('fade')).fadeToggle(700);
    })
  })
$('.' + $(this).data('slide'))==$('slide-menu')

// メイン
$(function(){
    $('.target').on('click', function(){
      $('.' + $(this).data('slide')).slideToggle(700);
      $('.' + $(this).data('fade')).fadeToggle(700);
    })
  })
$('.' + $(this).data('slide'))==$('slide1')

$('.' + $(this).data('slide'))==$('slide2')

$('.' + $(this).data('slide'))==$('slide3')

