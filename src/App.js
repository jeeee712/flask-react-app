import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // 'Routes' 추가
import PredictionForm from "./components/PredictionForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {" "}
          <Route path="/" element={<PredictionForm />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
