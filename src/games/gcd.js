import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const maxNumber = 100;
const minNumber = 1;

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const generateRound = () => {
  const num1 = Math.floor(Math.random() * maxNumber) + minNumber;
  const num2 = Math.floor(Math.random() * maxNumber) + minNumber;
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));
  return [question, correctAnswer];
};

const runGcdGame = () => {
  runGame(description, generateRound);
};

export default runGcdGame;
