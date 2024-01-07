import input from "./input.js"

/**
 * @param {Array<Object.<string, number>>} game
 * @returns {bool}
*/
function getPower(game){
  let red = 0;
  let green = 0;
  let blue = 0;

  for(let i = 0; i < game.length; i++){
    red = Math.max(game[i].red ? game[i].red : 0, red)
    green = Math.max(game[i].green ? game[i].green : 0, green)
    blue = Math.max(game[i].blue ? game[i].blue : 0, blue)
  }
  return red * green * blue
}

/**
 * @param {Array<Object.<string, number>>[]} input
 * @returns {number}
*/
function findResult(input){
  let total = 0;

  for(let i = 0; i < input.length; i++){
    total += getPower(input[i])
  }
  
  return total
}

let total = findResult(input)
// console.log(input[9])
console.log("Part-two: The sum of the power is: " + total)