import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const maxStartNumber = 100;
const maxStep = 10;
const minStep = 1;
const minLength = 5;
const maxLengthDiff = 6;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const start = Math.floor(Math.random() * maxStartNumber);
  const step = Math.floor(Math.random() * maxStep) + minStep;
  const length = Math.floor(Math.random() * maxLengthDiff) + minLength;
  const progression = generateProgression(start, step, length);
  const hiddenIndex = Math.floor(Math.random() * length);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => {
  runGame(description, generateRound);
};

export default runProgressionGame;
