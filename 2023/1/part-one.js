import input from "./input.js"

function findResult(input){
  let total = 0;

  input.forEach(str => {
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
  
  return total
}

let total = findResult(input)

function result(){
  console.log("The total is: " + total)
}
result()
export {total, result};