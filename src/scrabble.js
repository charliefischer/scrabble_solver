class Scrabble {
  constructor(word) {
    this.score = 0

    this.pointsChecker(word)

  }  

  showScore() {
    return this.score
  }

  pointsChecker(word) {
    if (word === 'a') {
      return this.score = 1
    }
  }

}

module.exports = Scrabble