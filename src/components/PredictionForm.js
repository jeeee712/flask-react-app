import React, { useState } from "react";
import axios from "axios";
import PredictionResult from "./PredictionResult";

function PredictionForm() {
  const [sbp, setSbp] = useState("");
  const [dbp, setDbp] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [prediction, setPrediction] = useState("");

  const predict = async () => {
    try {
      const response = await axios.post("/predict", {
        sbp: sbp,
        dbp: dbp,
        height: height,
        weight: weight,
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>심혈관질환 예측</h1>
      <label>수축기혈압 (SBP):</label>
      <input
        type="number"
        value={sbp}
        onChange={(e) => setSbp(e.target.value)}
        required
      />
      <br />
      <br />
      <label>이완기혈압 (DBP):</label>
      <input
        type="number"
        value={dbp}
        onChange={(e) => setDbp(e.target.value)}
        required
      />
      <br />
      <br />
      <label>키 (CM):</label>
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        required
      />
      <br />
      <br />
      <label>몸무게 (KG):</label>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
      />
      <br />
      <br />
      <button onClick={predict}>예측</button>
      <PredictionResult prediction={prediction} />
    </div>
  );
}

export default PredictionForm;
