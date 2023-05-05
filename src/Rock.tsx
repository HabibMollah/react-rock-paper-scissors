interface Props {
  botChoice: string;
  userChoice: string;
  setChoice: (a: string) => void;
  setBotChoice: (a: () => string) => void;
  randomChoice: () => string;
}

function Rock({
  botChoice,
  setBotChoice,
  randomChoice,
  userChoice,
  setChoice,
}: Props) {
  // Decide who won
  function judgement(computer: string, user: string) {
    let result;
    if (
      (computer === 'rock 🪨' && user === 'scissors ✂') ||
      (computer === 'paper 📜' && user === 'rock 🪨') ||
      (computer === 'scissors ✂' && user === 'paper 📜')
    ) {
      if (computer === 'rock 🪨') {
        result = '🤖 You Lose! rock 🪨 beats scissors ✂';
      } else if (computer === 'paper 📜') {
        result = '🤖 You Lose! paper 📜 beats rock 🪨';
      } else {
        result = '🤖 You Lose! scissors ✂ beats paper 📜';
      }
    } else if (
      (computer === 'rock 🪨' && user === 'paper 📜') ||
      (computer === 'paper 📜' && user === 'scissors ✂') ||
      (computer === 'scissors ✂' && user === 'rock 🪨')
    ) {
      if (user === 'paper 📜') {
        result = '🧠 You Win! paper 📜 beats rock 🪨';
      } else if (user === 'scissors ✂') {
        result = '🧠 You Win! scissors ✂ beats paper 📜';
      } else {
        result = '🧠 You Win! rock 🪨 beats scissors ✂';
      }
    } else if (computer === user) {
      result = 'Tie 🤖 ⚔ 🧠';
    } else {
      result = 'Choose one of the above';
    }
    return result;
  }

  const result = judgement(botChoice, userChoice);
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 text-center font-thin">
        <div
          onClick={() => {
            setChoice('rock 🪨');
            setBotChoice(randomChoice);
          }}
          className="bg-gray-100 text-xl hover:bg-gray-300 rounded-lg">
          <div className="text-6xl py-4">🪨</div>
          <p>Rock</p>
        </div>
        <div
          onClick={() => {
            setChoice('paper 📜');
            setBotChoice(randomChoice);
          }}
          className="bg-gray-100 text-xl hover:bg-gray-300 rounded-lg">
          <div className="text-6xl py-4">📜</div>
          <p>Paper</p>
        </div>
        <div
          onClick={() => {
            setChoice('scissors ✂');
            setBotChoice(randomChoice);
          }}
          className="bg-gray-100 text-xl hover:bg-gray-300 rounded-lg">
          <div className="text-6xl py-4">✂</div>
          <p>Scissors</p>
        </div>
      </div>
      <div className="text-3xl text-center my-8 font-bold tracking-widest">
        {result}
      </div>
    </div>
  );
}

export default Rock;
