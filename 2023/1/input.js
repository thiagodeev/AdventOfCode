import * as fs from 'fs'

const inputArray = fs.readFileSync("./input.txt", 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    console.error("err");
    return;
  }
  console.log(data);
})
.trim()
.split("\n");

export default inputArray;