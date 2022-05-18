// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// push the left and right arrow keys to change the outfit
// push the up and down keys to change which part of the body were changing

document.onkeydown = checkKey

function checkKey(e) {
  if (e.keyCode == '38') {
    console.log('i push up')
    // up arrow
  } else if (e.keyCode == '40') {
    // down arrow
  } else if (e.keyCode == '37') {
    changeHorizontal(-1)
    // left arrow
  } else if (e.keyCode == '39') {
    changeHorizontal(1)
    // right arrow
  }
}

var headIndex = 0
var bodyIndex = 0
var feetIndex = 0

var mainIndex = 0

var head = document.getElementById('head')
var body = document.getElementById('body')
var feet = document.getElementById('feet')

function changeHorizontal(shift) {
  if (mainIndex == 0) {
    headIndex += shift

    if (headIndex < 0) headIndex = 5

    if (headIndex > 5) headIndex = 0

    head.src = './images/head' + headIndex + '.png'
  }

  if (mainIndex == 1) {
    bodyIndex += shift

    if (bodyIndex < 0) bodyIndex = 5

    if (bodyIndex > 5) bodyIndex = 0

    body.src = './images/head' + bodyIndex + '.png'
  }

  if (mainIndex == 2) {
    feetIndex += shift

    if (feetIndex < 0) feetIndex = 5

    if (feetIndex > 5) feetIndex = 0

    feet.src = './images/head' + feetIndex + '.png'
  }
}

function changeVertical(shift) {
  mainIndex += shift

  if (mainIndex < 0) mainIndex = 2

  if (mainIndex > 2) mainIndex = 0
}
