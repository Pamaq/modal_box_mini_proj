const warningBtn = document.querySelector(".warning");
const errorBtn = document.querySelector(".error");
const defaultBtn = document.querySelector(".default");

const warningFun = () => {
	console.log("hello");
};
const errorFun = () => {console.log("welcome");};
const defaultFun = () => {console.log(":))");};

warningBtn.addEventListener("click", warningFun);
errorBtn.addEventListener("click", errorFun);
defaultBtn.addEventListener("click", defaultFun);
