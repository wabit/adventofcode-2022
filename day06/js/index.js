const fs = require('fs')
const input = fs.readFileSync('../input.file', 'utf8').split('\n')


const partOneMax = 4
const partTwoMax = 14
const array = []

function countUnique(array) {
  return array.filter((item, index) => array.indexOf(item) === index).length
}

function process(max) {
  let count = 0
  input[0].split("").every((char) => {
    array.unshift(char)
    count++
    if (array.length > max) {
      array.length = max
    }
    if (countUnique(array) === max) {
      return false
    } else {
      return true
    }
  })
  return count
}

console.log("Part One: " + process(partOneMax))
console.log("Part Two: " + process(partTwoMax))
