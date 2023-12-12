import input from "./input.js"

function convertNumbersToRealNumbers(string){
  
  let numbers = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  }

  let result = string.replaceAll(/one|two|three|four|five|six|seven|eight|nine/gi, function (str) {
    return numbers[str];
  });

  return result
}

function findResult(input){
  let total = 0;
  

  input.forEach(str => {
    let adjustedStr = convertNumbersToRealNumbers(str);
    console.log(adjustedStr)
    let matches = adjustedStr.match(/\d/g);
    let result;
    
    if (matches.length == 1) {
      result = Number(`${matches[0]}${matches[0]}`)
      // console.log(result)
      total += result
    } else {
      result = Number(`${matches[0]}${matches[matches.length - 1]}`)
      // console.log(result)
      total += result
    }
    // console.log(total)
  })
  
  return total
}

let total = findResult(input)

console.log("Part-two: The total is: " + total)