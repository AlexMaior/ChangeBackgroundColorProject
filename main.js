let btn = document.querySelector("#btn");
let body = document.querySelector("body")
let para = document.querySelector("#para")
let hex = document.querySelector("#hex")
let red =document.querySelector("#red")
let green =document.querySelector("#green")
let blue =document.querySelector("#blue")
let redCol, greenCol, blueCol;

//event listener that fires when button is clicked and changes the text from the html
btn.addEventListener("click", function() {
    let x=color();
    body.style.backgroundColor=x;
    para.textContent= x;
    hex.textContent= RGBToHex();
})


//Function that returns random rgb color
function color(){
    let r = Math.floor(Math.random() * 256);
    redCol = r;
    let g = Math.floor(Math.random() * 256)
    greenCol= g;
    let b = Math.floor(Math.random() * 256)
    blueCol = b;
    let col = "RGB(" + r + ", " + g + ", " + b + ")"
    return col; 
}

//Function that changes the rgb value into hex value 
function RGBToHex() {
    redCol = redCol.toString(16);
    greenCol = greenCol.toString(16);
    blueCol = blueCol.toString(16);
  
    if (redCol.length == 1)
    redCol = "0" + redCol;
    if (greenCol.length == 1)
    greenCol = "0" + greenCol;
    if (blueCol.length == 1)
    blueCol = "0" + blueCol;
  
    return "#" + redCol + greenCol + blueCol;
  }