import runGame from '../index.js'

const description = 'What is the result of the expression?'

const operators = ['+', '-', '*']
const maxNumber = 100

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const num1 = Math.floor(Math.random() * maxNumber)
  const num2 = Math.floor(Math.random() * maxNumber)
  const operator = operators[Math.floor(Math.random() * operators.length)]
  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = String(calculate(num1, num2, operator))
  return [question, correctAnswer]
}

const runCalcGame = () => {
  runGame(description, generateRound)
}

export default runCalcGame
