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

var head = document.getElementById('head')
var body = document.getElementById('body')
var feet = document.getElementById('feet')

function changeHorizontal(shift) {
  headIndex += shift

  head.src = './images/head' + headIndex + '.png'
}
