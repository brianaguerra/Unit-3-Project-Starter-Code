/* Declare variables below to save the different sections (divs) of your story*/


let storyOpening = document.querySelector(".story-opening");
let Option1screen = document.querySelector(".option-one-screen");
let Option2screen = document.querySelector(".option-two-screen");
let Option1end = document.querySelector(".option-one-end");

let Option2end = document.querySelector(".option-two-end");
let button1 = document.querySelector(".option-one");

let button2 = document.querySelector(".option-two");
let photo1 = document.querySelector(".photo1");

let photo2 = document.querySelector(".photo2");

let photo3 = document.querySelector(".photo3");

let restart = document.querySelector(".restart");

let lastMessage = document.querySelector(".lastMessage");
let startOver1 = document.querySelector(".start-over1");
let startOver2 = document.querySelector(".start-over2");
/*When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){
*/
button1.onclick = function() {
    Option1screen.style.display = "block";
    storyOpening.style.display = "none";
};

button2.onclick = function() {
    Option2screen.style.display = "block";
    storyOpening.style.display = "none";
};

photo1.onclick = function() {
    Option1end.style.display = "block";
    Option1screen.style.display = "none";
    lastMessage.innerHTML = "Yeah I love his music";
    lastMessage.style = "color:brown";

};


photo2.onclick = function() {
    Option1end.style.display = "block";
    Option1screen.style.display = "none";
    lastMessage.innerHTML = "yes";
    lastMessage.style = "color:blue";
};
photo3.onmouseover = function() {
    Option1end.style.display = "block";
    Option1screen.style.display = "none";
    lastMessage.innerHTML = "You choose San Francisco! We're going to have an awesome trip!";
    lastMessage.style = "color:purple";
};

restart.onclick = function() {
    Option2end.style.display = "block";
    Option2screen.style.display = "none";
};
startOver1.onclick = function() {
    Option1screen.style.display = "block";
    Option1end.style.display = "none";
};

startOver2.onclick = function() {
    storyOpening.style.display = "block";
    Option2end.style.display = "none";
};