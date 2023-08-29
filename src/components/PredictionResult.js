import React from "react";

function PredictionResult({ prediction }) {
  return (
    <div>
      <h2>심혈관질환 예측 결과</h2>
      {prediction && <p>{prediction}</p>}
    </div>
  );
}

export default PredictionResult;
