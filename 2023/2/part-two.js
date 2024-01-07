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
    if(game[i].red > red){
      red = game[i].red;
    }
     
    if(game[i].green > green){
      green = game[i].green;
    }
     
    if(game[i].blue > blue){
      blue = game[i].blue;
    }
     
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