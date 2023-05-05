import { useState } from 'react';
import Result from './Result';
import Rock from './Rock';

function App() {
  // this is user's
  const [choice, setChoice] = useState('');
  const [botChoice, setBotChoice] = useState('');

  // Bot's turn
  const choices = ['rock', 'paper', 'scissor'];

  const randomIndex = () => {
    return Math.floor(Math.random() * choices.length);
  };
  function randomChoice() {
    return choices[randomIndex()];
  }

  return (
    <div>
      <div>
        <h1 className="text-4xl tracking-widest font-bold text-center mt-6 mb-10">
          Choose your weapon: <br />
          🪨 📜 ✂
        </h1>
        <Rock
          botChoice={botChoice}
          setBotChoice={setBotChoice}
          randomChoice={randomChoice}
          userChoice={choice}
          setChoice={setChoice}
        />
        <Result botChoice={botChoice} userChoice={choice} />
      </div>
    </div>
  );
}

export default App;
