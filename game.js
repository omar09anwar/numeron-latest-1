var number1 = Math.round(Math.random() * 100);
const number1box = document.getElementById("number1");

var number2 = Math.round(Math.random() * 100);
const number2box = document.getElementById("number2");

var number3box = document.getElementById("number3");

var operator;
var score = 0;

var number3;

function randomise() {

number1 = Math.round(Math.random() * 100);
number2 = Math.round(Math.random() * 100);

if (number1 < number2) { // get the greater number
var extra = number1;
number1 = number2;
number2 = extra;
}



operator = Math.round(Math.random() * 5); // 1-5 random number generated
switch (operator) {
case 1:
number3 = number1 + number2;
break;
case 2:
number3 = number1 - number2;
break;
case 3:
number3 = number1 * number2;
break;
case 4:
number3 = Math.floor(number1 / number2);
break;
case 5:
number3 = number1 % number2;
break;

case 0:
randomise();
}

number1box.innerHTML = number1;
number2box.innerHTML = number2;
number3box.innerHTML = number3;

console.log(number1 + " " + number2 + " " + number3 + " " + operator);
}

randomise();


const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mul = document.getElementById("mul");
const divide = document.getElementById("divide");
const modulus = document.getElementById("modulus");


plus.onclick = () => {
if ((number1 + number2) === number3) {
score++;
randomise();
resetTime(timerId);
}
else {
location.href = "gameover.html?score=" + score;
}
}

minus.onclick = () => {
if ((number1 - number2) === number3) {
score++;
randomise();
resetTime(timerId);
}
else {
location.href = "gameover.html?score=" + score;
}
}

mul.onclick = () => {
if ((number1 * number2) === number3) {
score++;
randomise();
resetTime(timerId);
}
else {
location.href = "gameover.html?score=" + score;
}
}

divide.onclick = () => {
if (Math.floor(number1 / number2) === number3) {
score++;
randomise();
resetTime(timerId);
}
else {
location.href = "gameover.html?score=" + score;
}
}


modulus.onclick = () => {
if ((number1 % number2) === number3) {
score++;
randomise();
resetTime(timerId);
}
else {
location.href = "gameover.html?score=" + score;
}
}




var time = 10;
var timerId;

function startTimer() {
time = 10;
timer.innerHTML = time;
timerId = setInterval(() => {
time--;
if (time == 0) location.href = "./gameover.html?score=" + score;
timer.innerHTML = time;
}, 1000);
}

function resetTime(intervalId) {
clearInterval(intervalId);
startTimer();
}

startTimer();

