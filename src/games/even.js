import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const maxNumber = 100;

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = Math.floor(Math.random() * maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => {
  runGame(description, generateRound);
};

export default runEvenGame;
