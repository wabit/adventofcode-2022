const fs = require('fs')
const input = fs.readFileSync('../input.file', 'utf8').split('\n')

let totalA = 0
let totalB = 0
const scores = {
  "A": 1, // rock
  "X": 1, // rock
  "B": 2, // paper
  "Y": 2, // paper
  "C": 3, // scissors
  "Z": 3 // scissors
}
const loseTable = {
  "A": "C",
  "B": "A",
  "C": "B"
}
const winTable = {
  "A": "B",
  "B": "C",
  "C": "A"
}

function calculateScore(mode, playerOne, playerTwo) {
  let outcomeScore = 0
  let score = 0
  let finalScore = 0
  if (mode === "A") {
    if (playerOne === "A" && playerTwo === "Z") { outcomeScore = 0 }
    if (playerOne === "A" && playerTwo === "Y") { outcomeScore = 6 }
    if (playerOne === "B" && playerTwo === "X") { outcomeScore = 0 }
    if (playerOne === "B" && playerTwo === "Z") { outcomeScore = 6 }
    if (playerOne === "C" && playerTwo === "Y") { outcomeScore = 0 }
    if (playerOne === "C" && playerTwo === "X") { outcomeScore = 6 }
    if (scores[playerOne] === scores[playerTwo]) { outcomeScore = 3 }
    finalScore = outcomeScore + scores[playerTwo]
  }
  if (mode === "B") {
    if (playerTwo === "X") { finalScore = scores[loseTable[playerOne]] } // Lose
    if (playerTwo === "Y") { finalScore = scores[playerOne] + 3 } // Draw
    if (playerTwo === "Z") { finalScore = scores[winTable[playerOne]] + 6 } // Win
    finalScore = score + outcomeScore
  }

  return finalScore
}

input.forEach(el => {
  playerOne = el.split(' ')[0]
  playerTwo = el.split(' ')[1]
  totalA += calculateScore("A", playerOne, playerTwo)
  totalB += calculateScore("B", playerOne, playerTwo)
})

console.log("Part 1: " + totalA)
console.log("Part 2: " + totalB)