// alert("Connected");

// var colors = [
//   "rgb(255, 0, 0)"
//   , "rgb(255, 255, 0)"
//   , "rgb(0, 255, 0)"
//   , "rgb(0, 255, 255)"
//   , "rgb(0, 0, 255)"
//   , "rgb(255, 0, 255)"
// ];

// **** INITIALISE GLOBAL VARIABLES *****
var messageDisplay = document.getElementById("message");
var squares = document.getElementsByClassName("square");
var pickedColor = null; // target color to guess
var oldColors = null; // contains Colors already assigned.
var header1 = document.querySelector("h1");
var h1DfltBgColor = window.getComputedStyle(header1).backgroundColor;
var reset = document.getElementById("reset");
var hardBtn = document.getElementById("hardBtn");
var easyBtn = document.getElementById("easyBtn");

// *** FUNCTION: <BODY> BACKGROUND-COLOR
function bodyBgColor() {

  var body = document.querySelector("body");
  var bodyStyles = window.getComputedStyle(body);
  var bodyBgColor = bodyStyles.getPropertyValue("background-color");

  return bodyBgColor;
}

// *** FUNCTION: GENERATE RANDOM WHOLE NUMBER < GIVEN NUMBER
function pickNumber(lessThan) {
  return Math.floor(Math.random()*lessThan);
}

// *** FUNCTION: GENERATE A RANDOM COLOR NOT IN THE SUPPLIED LIST
function newColor(notOneOf) {

  var rgb = null;

  for (var isNewColor = false; !isNewColor;)
    {
      rgb = "rgb" +
        "(" + pickNumber(256) + "," + pickNumber(256) + "," + pickNumber(256) + ")";
      isNewColor = true;

    for (var i = 0; i < notOneOf.length; i++) {
      if (notOneOf[i] === rgb) {
        isNewColor = false;
        break;
      }
    }
  }

  return rgb;
}

// +++ EVENT HANDLER: ON RESET INITIALISE THE GAME;
reset.addEventListener("click", initGame);

// EVENT HANDLER: ON HARD MAKE MORE SQUARES AND INVERT THE COLORS OF THE HARD BUTTON
hardBtn.addEventListener("click", 
  function() {
    defineSquares(6);
    this.classList.add("selected");
    easyBtn.classList.remove("selected");

    initGame();
  }
);

// +++ EVENT HANDLER: ON EASY MAKE FEWER SQUARES AND INVERT THE COLORS OF THE EASY BUTTON
easyBtn.addEventListener("click",
  function(){

    defineSquares(3);
    this.classList.add("selected");
    hardBtn.classList.remove("selected");

    initGame();
  }
); 

// *** FUNCTION: MAINTAIN THE SQUARE DIVS UNDER THE CONTAINER DIV 
function defineSquares(noOfSquares) {

  // first remove ALL squares within its container 
  // can't use a or because squares.length reduces
  var squareCtnr = document.querySelector(".container");
  while (squares.length > 0) {
    squareCtnr.removeChild(squares[squares.length-1]);
  }

  // append required number of square DIVs to the container
  for (var i = 0; i < noOfSquares; i++) {
    var squareDiv = document.createElement( "div");
    squareDiv.className = "square";
    squareCtnr.appendChild(squareDiv);
  }

  // refresh the squares collection
  // squares = document.getElementsByClassName("square");
  squares = squareCtnr.children;
}

// *** FUNCTION: INTIALISE THE GAME
function initGame() {

  setH1BgColor(h1DfltBgColor);

  // Any new color assigned to a square should not be the
  // same as the background color of the <BODY> element.
  oldColors = [bodyBgColor()];

  // re-intialise the reset button text to "New Colors";
  reset.textContent = "New Colors";

  for (var i = 0; i < squares.length; i++) {

    // assign a new color to the square
    squares[i].style.backgroundColor = newColor(oldColors);

    // include the color to the list of colors already assigned
    oldColors.push(squares[i].style.backgroundColor);

    // add click listeners to the square
    squares[i].addEventListener("click",
      function () {

        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) { // "pickedColor" is defined below
        // alert("Correct!");
        messageDisplay.textContent = "Correct!";
        changeBgColor(clickedColor);

        // make the reset button read "Play Again?"
        reset.textContent = "Play Again?";
        }
        else {
          removeSquare(this);
          // alert("Wrong");
        }
      });
  }

  // pick a square at random and choose its background color as the target
  pickedColor = squares[pickNumber(squares.length)].style.backgroundColor;
  var cdElement = document.getElementById("colorDisplay");
  cdElement.textContent = pickedColor.toUpperCase();

  // clear the message display area;
  messageDisplay.textContent = "";
}

function removeSquare() {
  this.style.backgroundColor = bodyBgColor();
  messageDisplay.textContent = "Try Again!";
}

// *** FUNCTION:
// CHANGE THE BACKGROUND COLOR OF ALL THE SQUARES AND THE HEADER TO A GIVEN COLOR
function changeBgColor(color) {

  setH1BgColor(color);

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

// *** FUNCTION:
// SET "h1's" BACKGROUND COLOR
function setH1BgColor(color) {
  header1.style.backgroundColor = color;
}