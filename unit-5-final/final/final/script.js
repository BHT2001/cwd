let graphbuttons = document.querySelectorAll(".graphbutton");
let datatitle = document.getElementById("datatitle");
let datadescription = document.getElementById("datadescription");

graphbuttons.forEach(function(button) {button.addEventListener("click", function() {graphbuttons.forEach(function(otherButton) {otherButton.classList.remove("active");});

button.classList.add("active");
datatitle.textContent = button.dataset.title; datadescription.textContent = button.dataset.description;});});