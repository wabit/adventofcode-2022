const fs = require('fs')
const input = fs.readFileSync('../input.file', 'utf8').split('\n')

let partOne = 0
let partTwo = 0
const sharedItems = []
const groups = []


function checkIfShared(str1, str2) {
  let shared = []
  str1.split('').forEach((el, i) => {
    str2.split('').forEach((el2, i2) => {
      if (el === el2) {
        if (!shared.includes(el)) {
          shared.push(el)
        }
      }
    })
  })
  return shared
}

function checkIfShared3(str1, str2, str3) {
  let shared = []
  str1.split('').forEach((el, i) => {
    str2.split('').forEach((el2, i2) => {
      str3.split('').forEach((el3, i3) => {
        if (el === el2 && el2 === el3) {
          if (!shared.includes(el)) {
            shared.push(el)
          }
        }
      })
    })
  })
  return shared
}

function getLetterPosition(letter) {
  position = letter.toUpperCase().charCodeAt(0)
  if ( letter === letter.toUpperCase())
  result = (position - 64) + 26
  else
  result = (position - 64)
  return result
}

// get shared items
input.forEach(el => {
  compartmentA = el.slice(0, el.length / 2)
  compartmentB = el.slice(el.length / 2, el.length)
  shared = checkIfShared(compartmentA, compartmentB)

  if (shared.length > 0) {
    shared.forEach(el => {
      sharedItems.push(el)
    })
  }
})



var blockCount = 0
var block = []
let blocksOfThree = []
// get blocks of 3
input.forEach(el => {
  if (blockCount <= 3) {
    blockCount++
    block.push(el)
    if (blockCount === 3) {
      blocksOfThree.push(block)
      block = []
      blockCount = 0
    }
  }
})

blocksOfThree.forEach(el => {
  shared = checkIfShared3(el[0], el[1], el[2])
  if (shared.length > 0) {
    shared.forEach(el => {
      groups.push(el)
    })
  }
})

// get letter position
sharedItems.forEach(el => {
  partOne += getLetterPosition(el)
})

groups.forEach(el => {
  partTwo += getLetterPosition(el)
})

console.log("Part 1: " + partOne)
console.log("Part 2: " + partTwo)
