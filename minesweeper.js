document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
//Generating a 5x5 board
var board = {
  cells: generateCells(5)
}

    // {
    //   row: 0,
    //   col: 0,
    //   isMine: false,
    //   hidden: true,
    // },



function generateCells (size) {


  var cells = []
//creates cells for rows (i) and columns (j)
  for (i = 0; i < size; i++ ) {
   for (j = 0; j < size; j++){
       cell = {
              row: i,
              col: j,
              hidden: true,
              // links isMine boolean to mineChance function
              isMine: mineChance(),
              
              
       }

     cells.push(cell)
   }
 }

  return cells
};
// creates 21% chance isMine boolean = true
function mineChance (){
  cellChance = Math.floor(Math.random() * 99); 
  if (cellChance < 20) {return true}
  else {return false}
}


function startGame () {
  // Don't remove this function call: it makes the game work!

//,
//document.addEventListener("click", function checkForWin ())

for (i = 0; i < board.cells.length; i++) {
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
}


  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?


function checkForWin (){

}
//
//
//   // Once [ c ] is equal to visibleNonMines the user wins.
//   // Create an if statement for if they are equal console log this, if this is not true console.log try again.
//
//
//   if (countVisibleNonMines = visibleNonMines ) {
//     	 console.log (lib.displayMessage('You win!’))
//     	 }
//
//   if else ( countVisibleNonMines = !visibleNonMines ) {
//     	console.log(“ Try Again ”)
//     	}
//
//     }
//
//
//   // Count through the array and count all of the mines and mark it [ a ]
//   // Then, [ a ] Mines - all cells on the board  = visibleNonMines
//
// Function visibleNonMines (cell) {
//
// Var mine = 0
//
//   For (a =0; a < board.cells.length; a++){
//     If ( cell[a].isMine ){
//   	   mine ++
//   	}
//   }
//
// return mine - cells
//
//   }
//
//
//
// // Count through the array again and count all the cells that are not mines and mark it [ b]
// // Then count through all the nonMines [ b ] and for every one that has the value hidden = false increase a number called [ c ].
//
//
//
// Function countVisibleNonMines (cell) {
//
//   Var count = 0
//
//     For (b =0; b < board.cells.length; b++){
//   	   if ( cell[b].!hidden .!isMine){
//   		count++
//   	}
//   }
//
// Return count
// }


function countSurroundingMines (cell) {

// make a surround array variable using the lib function
// make a count variable that starts at 0
// loop through all the surrounding cells, and if they are a mine, add to the count.
// return the counts
//
var surrounding = lib.getSurroundingCells(cell.row, cell.col)
var count = 0

for (j = 0; j < surrounding.length; j++) {
  if (surrounding[j].isMine){
    count++
  }
}

return count
}
