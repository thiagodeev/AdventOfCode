/////////////// PART ONE

// 1° assign the HTML element to a temp variable at console in DevTool
var temp1;

let allString = temp1.innerText
let array = allString.split("\n")
array.pop()

let total = 0

array.forEach(str => {
  let matches = str.match(/\d/g);
  let result;

  if (matches.length == 1) {
    result = Number(`${matches[0]}${matches[0]}`)
    total += result
  } else {
    result = Number(`${matches[0]}${matches[matches.length - 1]}`)
    total += result
  }
  // console.log(result)

})

console.log("O total eh:" + total)