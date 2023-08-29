import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // 'Routes' 추가
import PredictionForm from "./components/PredictionForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {" "}
          {/* 'Switch' 대신 'Routes' 사용 */}
          <Route path="/" element={<PredictionForm />} />{" "}
          {/* 'element'를 사용하여 컴포넌트를 렌더링 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
