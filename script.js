const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const openModalButtons2 = document.querySelectorAll("[data-modal-target2]");
const closeModalButtons2 = document.querySelectorAll("[data-close-button2]");
const buttons = document.querySelector("[data-carousel-button]");
openModalButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		openModal(modal);
	});
});

overlay.addEventListener("click", () => {
	const modals = document.querySelectorAll(".modal.active");
	modals.forEach((modal) => closeModal(modal));
});

closeModalButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const modal = button.closest(".modal");
		closeModal(modal);
	});
});
function openModal(modal) {
	if (modal == null) return;
	modal.classList.add("active");
	overlay.classList.add("active");
}
function closeModal(modal) {
	if (modal == null) return;
	modal.classList.remove("active");
	overlay.classList.remove("active");
}

openModalButtons2.forEach((button2) => {
	button2.addEventListener("click", () => {
		const modal2 = document.querySelector(button2.dataset.modalTarget);
		openModal2(modal2);
	});
});

overlay.addEventListener("click", () => {
	const modals2 = document.querySelectorAll(".modal2.active");
	modals2.forEach((modal2) => closeModal(modal2));
});

closeModalButtons2.forEach((button2) => {
	button2.addEventListener("click", () => {
		const modal2 = button2.closest(".modal2");
		closeModal2(modal2);
	});
});
function openModal2(modal2) {
	if (modal2 == null) return;
	modal2.classList.add("active");
	overlay.classList.add("active");
}
function closeModal2(modal2) {
	if (modal2 == null) return;
	modal2.classList.remove("active");
	overlay.classList.remove("active");
}

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const offset = button.dataset.carouselButton === "next" ? 1 : -1;
		const slides = button
			.closest("[data-carousel")
			.querySelector("[data-slides");
		const activeSlide = slides.querySelector("[data-active]");
		let newIndex = [...slides.children].indexOf(activeSlide) + offset;
		if (newIndex < 0) newIndex = slides.children.length - 1;
		if (newIndex >= slides.children.length) newIndex = 0;
		slides.childen[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
	});
});
