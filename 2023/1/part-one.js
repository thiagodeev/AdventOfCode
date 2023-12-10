import inputArray from "./input.js"

let total = 0

inputArray.forEach(str => {
  let matches = str.match(/\d/g);
  let result;

  if (matches.length == 1) {
    result = Number(`${matches[0]}${matches[0]}`)
    total += result
  } else {
    result = Number(`${matches[0]}${matches[matches.length - 1]}`)
    total += result
  }
})

function result(){
  console.log("The total is: " + total)
}

export default result;