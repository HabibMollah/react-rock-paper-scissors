interface Props {
  botChoice: string;
  userChoice: string;
}
function Result({ botChoice, userChoice }: Props) {
  return (
    <div className="grid grid-cols-3 m-2 mt-8 mb-4 text-2xl text-center font-medium">
      <div>
        🧠 <br /> You
      </div>
      <div className="font-bold text-5xl text-red-500">V/S</div>
      <div>
        🤖 <br /> Bot
      </div>
      <div className="font-normal text-xl my-4">{userChoice}</div>
      <div></div>
      <div className="font-normal text-xl my-4">{botChoice}</div>
    </div>
  );
}

export default Result;
