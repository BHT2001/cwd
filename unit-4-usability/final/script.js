let lefttopimg = document.getElementById("lefttopimg");
lefttopimg.addEventListener("click", function ()
{lefttopimg.classList.add("fade-out");});

let leftmidimg = document.getElementById("leftmidimg");
leftmidimg.addEventListener("click", function ()
{leftmidimg.classList.add("fade-out");});

let leftbotimg = document.getElementById("leftbotimg");
leftbotimg.addEventListener("click", function ()
{leftbotimg.classList.add("fade-out");});

let toprightfirst = document.getElementById("toprightfirst");
toprightfirst.addEventListener("click", function ()
{document.getElementById("toprightfirsttext").classList.add("revealed");});

let toprightsecond = document.getElementById("toprightsecond");
toprightsecond.addEventListener("click", function ()
{document.getElementById("toprightsecondtext").classList.add("revealed");});

let bottomrightfirst = document.getElementById("bottomrightfirst");
bottomrightfirst.addEventListener("click", function ()
{document.getElementById("bottomrightfirsttext").classList.add("revealed");});

let bottomrightsecond = document.getElementById("bottomrightsecond");
bottomrightsecond.addEventListener("click", function ()
{document.getElementById("bottomrightsecondtext").classList.add("revealed");});

let calculate = document.getElementById("calculate");
let susresult = document.getElementById("susresult");
calculate.addEventListener("click", function ()
{let q1answer = Number(document.querySelector('input[name="q1"]:checked').value);
let q2answer = Number(document.querySelector('input[name="q2"]:checked').value);
let q3answer = Number(document.querySelector('input[name="q3"]:checked').value);
let q4answer = Number(document.querySelector('input[name="q4"]:checked').value);
let q5answer = Number(document.querySelector('input[name="q5"]:checked').value);
let q6answer = Number(document.querySelector('input[name="q6"]:checked').value);
let q7answer = Number(document.querySelector('input[name="q7"]:checked').value);
let q8answer = Number(document.querySelector('input[name="q8"]:checked').value);
let q9answer = Number(document.querySelector('input[name="q9"]:checked').value);
let q10answer = Number(document.querySelector('input[name="q10"]:checked').value);

let q1score = q1answer-1;
let q2score = 5-q2answer;
let q3score = q3answer-1;
let q4score = 5-q4answer;
let q5score = q5answer-1;
let q6score = 5-q6answer;
let q7score = q7answer-1;
let q8score = 5-q8answer;
let q9score = q9answer-1;
let q10score = 5-q10answer;

let total = q1score + q2score + q3score + q4score + q5score
+ q6score + q7score + q8score + q9score + q10score;
let susscore = total * 2.5;
susresult.textContent = susscore;});