const Scrabble = require('../src/scrabble')
let scrabble;

describe('Scrabble', () => {
  test('an empty string returns a score of nil', () => {
    scrabble = new Scrabble('')
    expect(scrabble.showScore()).toEqual(0)
  })

  test('non alphabet characters return a score of nil', () => {
    scrabble = new Scrabble('  \t\n')
    expect(scrabble.showScore()).toEqual(0)
  })

  test('passing in null returns a score of nil', () => {
    scrabble = new Scrabble(null)
    expect(scrabble.showScore()).toEqual(0)
  })

  test('a returns a score of 1', () => {
    scrabble = new Scrabble('a')
    expect(scrabble.showScore()).toEqual(1)
  })
})

describe('PointChecker', () => {
  test('it accurately checks the score', () => {
    scrabble = new Scrabble()
    expect(scrabble.pointsChecker('a')).toEqual(1)
  })
})