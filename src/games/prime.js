import runGame from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const maxNumber = 100
const minNumber = 1
const minPrime = 2

const isPrime = num => {
  if (num < minPrime) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const generateRound = () => {
  const question = Math.floor(Math.random() * maxNumber) + minNumber
  const correctAnswer = isPrime(question) ? 'yes' : 'no'
  return [question, correctAnswer]
}

const runPrimeGame = () => {
  runGame(description, generateRound)
}

export default runPrimeGame
