console.log("Hello");
let myform = document.querySelector("#myform");

myform.addEventListener("submit", (event) => {
	event.preventDefault();

	console.log("Hello");
});