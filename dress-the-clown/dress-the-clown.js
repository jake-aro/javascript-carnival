// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
// PSEUDOCODE //
// push the left and right arrow keys to change the outfit
// push the up and down keys to change which part of the body were changing

// onkeydown function that is embeded = meaning every time you push a key in your keyboard
// assigned it as checkKey
document.onkeydown = checkKey

// function that determines which arrow key we push
// use the checkKey function here, so whenever you push your key into keyboard like up, down, left, right arrow keys.
function checkKey(e) {
  if (e.keyCode == '38') {
    changeVertical(-1)
    // up arrow
  } else if (e.keyCode == '40') {
    changeVertical(1)
    // down arrow
  } else if (e.keyCode == '37') {
    changeHorizontal(-1)
    // left arrow
  } else if (e.keyCode == '39') {
    changeHorizontal(1)
    // right arrow
  }
}
// variable thats starts at 0
var headIndex = 0
var bodyIndex = 0
var shoesIndex = 0

var mainIndex = 0

// references to head, body and shoes
var head = document.getElementById('head')
var body = document.getElementById('body')
var shoes = document.getElementById('shoes')

function changeHorizontal(shift) {
  // if statement for the head
  if (mainIndex == 0) {
    headIndex += shift

    if (headIndex < 0) headIndex = 5 // count till 5

    if (headIndex > 5) headIndex = 0 // the count revert back to 0

    head.src = './images/head' + headIndex + '.png' // source of the photo
  }

  // if statement for body
  if (mainIndex == 1) {
    bodyIndex += shift

    if (bodyIndex < 0) bodyIndex = 5 // count till 5

    if (bodyIndex > 5) bodyIndex = 0 // the count revert back to 0

    body.src = './images/body' + bodyIndex + '.png' // source of the photo
  }
  // if statement for shoes
  if (mainIndex == 2) {
    shoesIndex += shift

    if (shoesIndex < 0) shoesIndex = 5 // count till 5

    if (shoesIndex > 5) shoesIndex = 0 // the count revert back to 0

    shoes.src = './images/shoes' + shoesIndex + '.png' // source of the photo
  }
}

// function that change the mainIndex up and down
function changeVertical(shift) {
  mainIndex += shift

  if (mainIndex < 0) mainIndex = 2

  if (mainIndex > 2) mainIndex = 0 // mainIndex is like looping 0,1,2
}
