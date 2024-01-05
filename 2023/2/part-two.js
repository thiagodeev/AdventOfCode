// import input from "./input.js"

// function findNumber(string, needToRevert){
//   let numbers = {
//     'one': 1,
//     'two': 2,
//     'three': 3,
//     'four': 4,
//     'five': 5,
//     'six': 6,
//     'seven': 7,
//     'eight': 8,
//     'nine': 9
//   }
  
//   if(needToRevert){
//     let revertedNumbers = {};
//     for (const [key, value] of Object.entries(numbers)) {
//       revertedNumbers[[...key].reverse().join('')] = value;
//     }
//     numbers = revertedNumbers;
    
//     string = [...string].reverse().join('');
//   }
  
//   let arrayNumbers = Object.keys(numbers);
//   let theNumber;

//   for (let i = 0; i < string.length; i++){
//     let letter = string[i];

//     if(isFinite(letter)){
//       theNumber = Number(letter);
//       return theNumber;

//     } else {
//       let filteredNumbers = arrayNumbers.filter((numberString)=> numberString.charAt(0) == letter);

//       if(filteredNumbers.length > 0){
//         for (let j = 0; j < filteredNumbers.length; j++){
//           if(string.slice(i, i + filteredNumbers[j].length) == filteredNumbers[j]){
//             theNumber = numbers[filteredNumbers[j]];
//             return theNumber;
//           }
//         }
//       }
//     }
//   }

//   return theNumber;
// }

// function findFirstNumber(string){
//   return findNumber(string, false)
// }
// function findLastNumber(string){
//   return findNumber(string, true)
// }

// function findResult(input){
//   let total = 0;
  
//   input.forEach(str => {
//     let firstNumber = findFirstNumber(str);
//     let lastNumber = findLastNumber(str);

//     total += Number(`${firstNumber}${lastNumber}`)
//   })
  
//   return total
// }

// let total = findResult(input)

// console.log("Part-two: The total is: " + total)