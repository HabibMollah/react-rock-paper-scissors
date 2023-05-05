interface Props {
  botChoice: string;
  botScore: number;
  userChoice: string;
  score: number;
  result: string;
}
function Result({ botChoice, botScore, userChoice, score, result }: Props) {
  return (
    <div>
      <div className="text-3xl text-center my-8 font-bold tracking-widest">
        {result}
      </div>
      <div className="grid grid-cols-3 m-2 mt-8 mb-4 text-2xl text-center font-medium">
        <div className="bg-gray-200 rounded-lg grid grid-cols-2">
          <div>
            🧠 <br /> You
          </div>
          <div className="font-bold text-6xl">{score}</div>
        </div>
        <div className="font-bold text-5xl text-red-500">V/S</div>
        <div className="bg-gray-200 rounded-lg grid grid-cols-2">
          <div className="font-bold text-6xl">{botScore}</div>
          <div>
            🤖 <br /> Bot
          </div>
        </div>
        <div className="font-normal text-xl my-4">{userChoice}</div>
        <div></div>
        <div className="font-normal text-xl my-4">{botChoice}</div>
      </div>
    </div>
  );
}

export default Result;
