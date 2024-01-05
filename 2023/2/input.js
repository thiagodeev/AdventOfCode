import * as fs from 'fs'

const input = fs.readFileSync("./input.txt", 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    console.error("err");
    return;
  }
  console.log(data);
})
.trim()
.split("\n");

let test = input.map((arr) => {
  return arr.split(': ')[1].split('; ').map((subArr) => {
    let object = {}
    subArr.split(', ').forEach(element => {
      let formatedElement = element.split(' ')
      object[formatedElement[1]] = Number(formatedElement[0])
    });
    return object
  })
})

export default input;