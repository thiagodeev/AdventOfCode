'use strict'
import input from "./input.js"


/**
 * @param {string[]} input
 * @returns {number}
*/
function findResult(input){
  let total = 0;
  let array = []

  
  for(let i = 0; i < input.length; i++){

    // let searchForNumber = new RegExp(/\d/, 'g');
    // let searchForNotNumber = new RegExp(/\D+/, 'g');
    // searchForNumber.test(line)


    array.push(...findNumbersSurroundedBySymbols(input, i))
    //

    //first and last row
    // if (i == 0 || i == (input.length - 1)){
    // }

    // console.log(initialNumberIndex, indexOfANotNumber)
    // console.log(line[searchForNumber.lastIndex])
  }
  
  return array.reduce((a,b)=>a+b)
}


/**
 * 
 * @param {string[]} input The entire input, needed to get the previous and next line
 * @param {number} index Needed to find the current line
 */
function findNumbersSurroundedBySymbols(input, index) {
  /** @type {number[]} */
  const selectedNumers = [];


  let checkpoint = 0;
  let line = '';
  let numberInitialIndex = 0;

  while (numberInitialIndex >= 0) {
    line = input[index].slice(checkpoint)
    console.log(line)
    numberInitialIndex = line.search(/\d/g);
    if (numberInitialIndex < 0) break

    let slicedLine = line.slice(numberInitialIndex);
    console.log(slicedLine)
    let numberLength = slicedLine.search(/\D/g);
    if (numberLength < 0) break
    
    //looking for a symbol beside the number, left and right:   ->  . 1 2 3 .  <-
    let isThereASymbolBeside = findIfHasASymbolBeside(line);
    // console.log(isThereASymbolBeside)

    if (isThereASymbolBeside){
      console.log('cheguei')
      getAndSaveTheNumber();
      continue;
    }
    /** Finding symbol characters around the number:
     * 
     * PreviousLine:   . . . . . 
     * Line:           . 1 2 3 .
     * NextLine:       . . . . &   <- gotcha!
    */

    //starting from the left, searching for a symbol in the top and bottom line:   ->  . . . . .
    let initialIndex = checkpoint + numberInitialIndex - 1;
    let endIndex = checkpoint + numberInitialIndex + numberLength;

    //first line doesn't have a line above it
    if(index != 0) {
      let isThereASymbolAbove = findIfHasASymbolAbove()
      if (isThereASymbolAbove){
        getAndSaveTheNumber()
        continue;
      }
    }

    //last line doesn't have a line bellow it
    if(index < input.length - 1) {
      let isThereASymbolBelow = findIfHasASymbolBellow()
      if (isThereASymbolBelow){
        getAndSaveTheNumber()
        continue;
      }
    }

    checkpoint += numberInitialIndex + numberLength

    function findIfHasASymbolAbove(){
      const previousLine = input[index-1]
      // console.log(Number(slicedLine.slice(0, numberLength)),previousLine.slice(initialIndex, endIndex + 1))
      let isThereASymbolAbove = previousLine.slice(initialIndex, endIndex + 1).search(/[^\d/.]/g);

      if (isThereASymbolAbove >= 0) return true;
      return false
    }

    function findIfHasASymbolBellow(){
      const nextLine = input[index+1]
      let isThereASymbolBelow = nextLine.slice(initialIndex, endIndex + 1).search(/[^\d/.]/g);

      if (isThereASymbolBelow >= 0) return true;
      return false
    }

    /**
     * @param {number} numberInitialIndex Index of the first number digit
     * @param {number} numberLength 
     * @returns {bool}
     */
    function findIfHasASymbolBeside(line){
      // console.log(numberInitialIndex)
      return /[^\d/.]/g.test(line.charAt(numberInitialIndex - 1)) || /[^\d/.]/g.test(line.charAt(numberInitialIndex + numberLength));
    }
  
    function getAndSaveTheNumber(){
      const number = Number(slicedLine.slice(0, numberLength));
      selectedNumers.push(number);
      checkpoint += numberInitialIndex + numberLength
    }
  }

  return selectedNumers;

}

let total = findResult(input)
// console.log(input[9])
console.log("Part-one: The sum of the games IDs is: " + total)