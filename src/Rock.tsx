interface Props {
  setChoice: (a: string) => void;
  setBotChoice: (a: () => string) => void;
  randomChoice: () => string;
}

function Rock({ setBotChoice, randomChoice, setChoice }: Props) {
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
    </div>
  );
}

export default Rock;
