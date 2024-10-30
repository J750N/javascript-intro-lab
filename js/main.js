console.info("Hello World!")
document.getElementById("myHeading").innerHTML = "Jason Kumar";

// document.querySelector("nav ul li").setAttribute("class", "cuurentPage");
// document.querySelector("nav ul li a").setAttribute("href", "https://www.google.com/");
let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);
for (let i = 0; i < colourButtons.length; i++) {
    colourButtons[i].addEventListener("click", changeColour);
}

function changeColour() {
    console.info("I was clicked");
}

document.getElementById("myTestBtn").addEventListener("click", function () {
    console.info("Hi, I Was Clicked");
})

//colour picker
let redBtn = document.querySelector(".red");
redBtn.addEventListener("click", function () {
    document.body.setAttribute("class", "redBack");
});

let blueBtn = document.querySelector(".blue");
blueBtn.addEventListener("click", function () {
    document.body.setAttribute("class", "blueBack");
});

let greenBtn = document.querySelector(".green");
greenBtn.addEventListener("click", function () {
    document.body.setAttribute("class", "greenBack");
});

let yellowBtn = document.querySelector(".yellow");
yellowBtn.addEventListener("click", function () {
    document.body.setAttribute("class", "yellowBack");
});

let pinkBtn = document.querySelector(".pink");
pinkBtn.addEventListener("click", function () {
    document.body.setAttribute("class", "pinkBack");
});

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", function () {
    document.body.removeAttribute("class");
});