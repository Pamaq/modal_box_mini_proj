const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const openModalButtons2 = document.querySelectorAll("[data-modal-target2]");
const closeModalButtons2 = document.querySelectorAll("[data-close-button2]");

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
		closeModal(modal2);
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
