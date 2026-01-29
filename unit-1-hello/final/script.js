alert("javascript is working")
let box = document.getElementById("textarea")
box.addEventListener("input", function ()
{if (box.value == "Good day")
{alert ("Good day to you!")}});