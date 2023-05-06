interface Props {
  setChoice: (a: string) => void;
  setBotChoice: (a: () => string) => void;
  randomChoice: () => string;
  result: string;
  setScore: (a: number) => void;
  setBotScore: (a: number) => void;
  botScore: number;
  score: number;
}

function Weapons({
  setBotChoice,
  randomChoice,
  setChoice,
  result,
  setScore,
  setBotScore,
  score,
  botScore,
}: Props) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 text-center font-thin">
        <div
          onClick={() => {
            setChoice('rock 🪨');
            setBotChoice(randomChoice);
            if (/win/.test(result)) setScore(score + 1);
            if (/lose/.test(result)) setBotScore(botScore + 1);
          }}
          className="bg-gray-100 text-xl hover:bg-gray-300 rounded-lg">
          <div className="text-6xl py-4">🪨</div>
          <p>Rock</p>
        </div>
        <div
          onClick={() => {
            setChoice('paper 📜');
            setBotChoice(randomChoice);
            if (/win/.test(result)) setScore(score + 1);
            if (/lose/.test(result)) setBotScore(botScore + 1);
          }}
          className="bg-gray-100 text-xl hover:bg-gray-300 rounded-lg">
          <div className="text-6xl py-4">📜</div>
          <p>Paper</p>
        </div>
        <div
          onClick={() => {
            setChoice('scissors ✂');
            setBotChoice(randomChoice);
            if (/win/.test(result)) setScore(score + 1);
            if (/lose/.test(result)) setBotScore(botScore + 1);
          }}
          className="bg-gray-100 text-xl hover:bg-gray-300 rounded-lg">
          <div className="text-6xl py-4">✂</div>
          <p>Scissors</p>
        </div>
      </div>
    </div>
  );
}

export default Weapons;
