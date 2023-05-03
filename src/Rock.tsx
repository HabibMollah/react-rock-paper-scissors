interface Props {
  botChoice: string;
  userChoice: string;
  setChoice: (a: string) => void;
}

function Rock({ botChoice, userChoice, setChoice }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2 text-center font-thin">
      <div
        onClick={() => setChoice('rock')}
        className="bg-gray-100 text-xl hover:bg-gray-300 rounded-lg">
        <div className="text-6xl py-4">🪨</div>
        <p>Rock</p>
      </div>
      <div
        onClick={() => setChoice('paper')}
        className="bg-gray-100 text-xl hover:bg-gray-300 rounded-lg">
        <div className="text-6xl py-4">📜</div>
        <p>Paper</p>
      </div>
      <div
        onClick={() => setChoice('scissor')}
        className="bg-gray-100 text-xl hover:bg-gray-300 rounded-lg">
        <div className="text-6xl py-4">✂</div>
        <p>Scissors</p>
      </div>
    </div>
  );
}

export default Rock;
