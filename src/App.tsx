import { useState } from 'react';
import Result from './Result';
import Rock from './Rock';

function App() {
  // this is user's
  const [choice, setChoice] = useState('');

  // Bot's turn
  const choices = ['rock', 'paper', 'scissor'];

  const randomIndex = () => {
    return Math.floor(Math.random() * choices.length);
  };
  function getComputerChoice() {
    return choices[randomIndex()];
  }
  const botChoice = getComputerChoice();

  return (
    <div>
      <div>
        <h1 className="text-4xl text-center mt-6 mb-10">
          Choose your weapon between <br />
          🪨 📜 ✂
        </h1>
        <Rock botChoice={botChoice} userChoice={choice} setChoice={setChoice} />
        <Result />
      </div>
    </div>
  );
}

export default App;
