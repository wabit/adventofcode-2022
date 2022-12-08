const fs = require('fs')
const input = fs.readFileSync('../input.file', 'utf8').split('\n')

let calories = 0
let calorieTotals = []

//Part 1
input.forEach(el => {
  if (el != '') {
      calories += parseInt(el)
    } else {
    calorieTotals.push(calories)
    calories = 0
  }
})

calorieTotals.sort((a, b) => b - a)

//Part 2
// let topThree = calorieTotals[0] + calorieTotals[1] + calorieTotals[2] ## this seems a little copy and paste and wouldn't scale, but the function below seems overkill for this problem, but cant see a middle ground
function getTop(num) {
  initialValue = 0;
  top = calorieTotals
    .slice(0, num)
    .reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
  return top
}

console.log("Part 1: "+ calorieTotals[0])
console.log("Part 2: "+ getTop(3))

