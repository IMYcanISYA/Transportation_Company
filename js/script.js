const headerNav = document.querySelector('.header-bottom');
const header = document.querySelector('header');

window.onload = () => {
	PaddingHeader();
}
window.onresize = () => {
	PaddingHeader();
}

function PaddingHeader() {
	const height = headerNav.offsetHeight;
	if (window.innerWidth <= 768) {
		header.style.paddingTop = `${height}px`;
	} else header.style.paddingTop = '0px';
}

new Swiper(".services__slider", {
	navigation: {
		prevEl: '.services__btn._prev',
		nextEl: '.services__btn._next',
	},
	speed: 1500,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
});
const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector("#nav-menu");

burgerBtn.addEventListener("click", () => {
	burgerMenu.classList.toggle("_active");
	burgerBtn.classList.toggle("_active");
	document.body.classList.toggle('_lock');
})