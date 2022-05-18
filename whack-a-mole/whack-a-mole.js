// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// Pseudocodes //
//  get a random cell
// mole image appear in random cell
// click on the mole
// mole respawns in another cell

// create a variable that represent the table data
var cells = document.getElementsByTagName('TD')
// get a random number that is equal to number of cells
var randomIndex = Math.floor(Math.random() * cells.length)

var randomCell = cells[randomIndex]

var mole = document.createElement('img')

mole.src = './mole.PNG' // source of the mole image
mole.id = 'mole' // id of the mole

randomCell.appendChild(mole)

// onclick assignment, whenever we click
mole.onclick = whackedMole

// funtion is being carried out whenever we click the mouse
function whackedMole() {
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(mole)

  // audio file whenever we whack the mole
  var audio = new Audio('./whack-audio.wav')
  audio.play()
}
