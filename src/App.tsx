import Result from './Result';
import Rock from './Rock';

function App() {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center mt-6 mb-10">
          Choose your weapon between <br />⛰ 🗞 ✂
        </h1>
        <Rock />
        <Result />
      </div>
    </div>
  );
}

export default App;
