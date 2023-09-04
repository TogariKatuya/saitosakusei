var swiper = new Swiper('.swiper', {
    slidesPerView: 2,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
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