import { useState } from 'react';
import ScoreBoard from './ScoreBoard';
import Weapons from './Weapons';

function App() {
  const [choice, setChoice] = useState('');
  const [botChoice, setBotChoice] = useState('');
  const [score, setScore] = useState(0);
  const [botScore, setBotScore] = useState(0);

  // Bot's turn
  const choices = ['rock 🪨', 'paper 📜', 'scissors ✂'];

  const randomIndex = () => {
    return Math.floor(Math.random() * choices.length);
  };
  function randomChoice() {
    return choices[randomIndex()];
  }

  // Decide who won

  function judgement(computer: string, user: string) {
    if (
      (computer === 'rock 🪨' && user === 'scissors ✂') ||
      (computer === 'paper 📜' && user === 'rock 🪨') ||
      (computer === 'scissors ✂' && user === 'paper 📜')
    )
      return `🤖 You lose ${computer} beats ${user}`;
    if (
      (computer === 'rock 🪨' && user === 'paper 📜') ||
      (computer === 'paper 📜' && user === 'scissors ✂') ||
      (computer === 'scissors ✂' && user === 'rock 🪨')
    )
      return `🧠 You win ${user} beats ${computer}`;

    if (computer === '' && user === '') return '';
    return 'Tie 🤖 ⚔ 🧠';
  }

  const result = judgement(botChoice, choice);

  return (
    <div>
      <div>
        <h1 className="text-4xl tracking-widest font-bold text-center mt-6 mb-10">
          Choose your weapon: <br />
          🪨 📜 ✂
        </h1>
        <Weapons
          setBotChoice={setBotChoice}
          randomChoice={randomChoice}
          setChoice={setChoice}
          result={result}
          setScore={setScore}
          setBotScore={setBotScore}
          botScore={botScore}
          score={score}
        />
        <ScoreBoard
          botChoice={botChoice}
          botScore={botScore}
          userChoice={choice}
          score={score}
          result={result}
        />
      </div>
    </div>
  );
}

export default App;
