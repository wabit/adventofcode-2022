const fs = require('fs')
const input = fs.readFileSync('input.file', 'utf8').split('\n')

let calories = 0
let calorieTotals = []

//Part 1
input.forEach(element => {
  if (element != '') {
      calories += parseInt(element)
    } else {
    calorieTotals.push(calories)
    calories = 0
  }
})

calorieTotals.sort((a, b) => b - a)

//Part 2
let topThree = calorieTotals[0] + calorieTotals[1] + calorieTotals[2]

console.log("Part 1: "+ calorieTotals[0])
console.log("Part 2: "+ topThree)