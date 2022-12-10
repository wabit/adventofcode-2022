const fs = require('fs')
const input = fs.readFileSync('../input.file', 'utf8').split('\n')

let partOne = 0
let partTwo = 0

function splitLine(line) {
  line = line.split(',')
  return line
}

function checkOverlap(rangeOne, rangeTwo) {
  rangeOneSplit = rangeOne.split('-')
  rangeTwoSplit = rangeTwo.split('-')
  // get numbers between ranges
  let rangeOneList = []
  let rangeTwoList = []
  for (let i = Number(rangeOneSplit[0]); i <= Number(rangeOneSplit[1]); i++) {
    rangeOneList.push(i)
  }
  for (let i = Number(rangeTwoSplit[0]); i <= Number(rangeTwoSplit[1]); i++) {
    rangeTwoList.push(i)
  }

  if (rangeOneList.some(r => rangeTwoList.includes(r))) {
    if (
      rangeOneList.length >= rangeTwoList.length &&
      rangeTwoList[0] >= rangeOneList[0] &&
      rangeTwoList[rangeTwoList.length - 1] <= rangeOneList[rangeOneList.length - 1]
    ) {
      partOne += 1
    } else if (
      rangeTwoList.length >= rangeOneList.length &&
      rangeOneList[0] >= rangeTwoList[0] &&
      rangeOneList[rangeOneList.length - 1] <= rangeTwoList[rangeTwoList.length - 1]
    ) {
      partOne += 1
    }
    partTwo += 1
    return true
  } else {
    return false
  }
}

input.forEach(line => {
  data = splitLine(line)
  overlap = checkOverlap(data[0], data[1])
})

console.log('Part One: ', partOne)
console.log('Part Two: ', partTwo)