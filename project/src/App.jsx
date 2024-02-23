import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const [predictedNumber, setPredictedNumber] = useState(null);

  const fetchDataAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data.age);
    });
  };
  const fetchDataNumber = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedNumber(res.data.count);
    });
  };
  return (
    <div className="App">
      <input
        placeholder="EX. molham"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button className="button-17" role="button" onClick={fetchDataAge}>
        predict Age
      </button>
      <button className="button-17" role="button" onClick={fetchDataNumber}>
        predict Number
      </button>

      <h1>Predicted Age: {predictedAge} </h1>
      <h1>Predicted Number: {predictedNumber} </h1>
    </div>
  );
}

export default App;
