import input from "./input.js"

/**
 * @param {Array<Object.<string, number>>} game
 * @returns {bool}
*/
function isPossible(game){
  let maxValues = {
    red: 12,
    green: 13,
    blue: 14
  }

  for(let i = 0; i < game.length; i++){
    if(game[i].red != undefined) {
      if(game[i].red > maxValues.red){
        return false
      }
    } 
    if(game[i].green != undefined) {
      if(game[i].green > maxValues.green){
        return false
      }
    } 
    if(game[i].blue != undefined) {
      if(game[i].blue > maxValues.blue){
        return false
      }
    } 
  }
  return true
}

/**
 * @param {Array<Object.<string, number>>[]} input
 * @returns {number}
*/
function findResult(input){
  let total = 0;

  for(let i = 0; i < input.length; i++){
    if(isPossible(input[i])){
      total += (i + 1)
    }
  }
  
  return total
}

let total = findResult(input)
// console.log(input[9])
console.log("Part-one: The sum of the games IDs is: " + total)