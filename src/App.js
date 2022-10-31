import './App.css';
import MainPage from './mainPage/MainPage';
import QuizPage from './quizPage/QuizPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
