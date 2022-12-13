const fs = require('fs')
const input = fs.readFileSync('../input.file', 'utf8').split('\n')

function getMoves(inputFile) {
  let moves = []
  inputFile.forEach((line) => {
    if (line[0] === "m")
      moves.push([line.split(" ")[1], line.split(" ")[3], line.split(" ")[5]])
  })
  return moves
}

function analyzeStacks(inputFile) {
  const numberOfStacks = {
    "max": 0,
    "stackBottomLN": 0,
    "map": {},
    "stacks": {}
  }
  try {
    inputFile.forEach((line, i) => {
      if ((line[0] === " " & line[1] === "1")) {
        numberOfStacks.stackBottomLN = i
        let count = 0
        line.split("").forEach((char) => {
          if (char === " ") {
            count++
          } else {
            count++
              numberOfStacks.map[count] = char
              numberOfStacks.stacks[char] = []
          }
        })
        numberOfStacks.max = Number(line.slice(-2))
        return
      }
    })
    return numberOfStacks
  } catch (e) {
    console.log(e)
  }
}

function buildStacks(inputFile, stackDetails) {
  inputFile.forEach((line, i) => {
    if (i < stackDetails.stackBottomLN) {
      const keys = Object.keys(stackDetails.map)
      keys.forEach((key) => {
        if (line[Number(key)] !== ' ')
          stackDetails.stacks[stackDetails.map[key]].unshift(line[Number(key) - 1])
      })
    }
  })
  return stackDetails.stacks
}

function sortStacks9000(moves, stacks) {
  moves.forEach((move) => {
    let count = 0
    while (count <= move[0] - 1) {
      stacks[move[2]].push(stacks[move[1]].pop())
      count++
    }
  })
  return stacks
}

function sortStacks9001(moves, stacks) {
  moves.forEach((move) => {
    let count = -Math.abs(move[0])
    while (count < 0) {
      if (count < -1) {
        stacks[move[2]].push(stacks[move[1]].slice(count)[0])
        count++
      }
      if (count === -1) {
        stacks[move[2]].push(stacks[move[1]].slice(count)[0])
        stacks[move[1]].length = stacks[move[1]].length -Math.abs(move[0])
        count++
      }
    }
  })
  return stacks
}

function topOfStacks(stacksSorted) {
  let partOne = ""
  Object.keys(stacksSorted).forEach((key) => {
    partOne += stacksSorted[key].pop()
  })
  return partOne
}

const partOne = topOfStacks(sortStacks9000(getMoves(input), buildStacks(input, analyzeStacks(input))))
const partTwo = topOfStacks(sortStacks9001(getMoves(input), buildStacks(input, analyzeStacks(input))))

console.log("Part One: " + partOne)
console.log("Part Two: " + partTwo)