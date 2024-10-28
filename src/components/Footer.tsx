// Trivia.tsx
import React, { useState } from 'react';

interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface TriviaProps {
  questions: Question[];
  category: string;
}

const Trivia: React.FC<TriviaProps> = ({ questions, category }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Function to handle answer selection
  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      alert(`Game Over! Your Score: ${score} / ${questions.length}`);
    }
  };

  return (
    <div className="trivia-container">
      <h1>{category} Quiz</h1>
      <div className="question-container">
        <p>{questions[currentQuestion].question}</p>
        {questions[currentQuestion].answers.map((ans, idx) => (
          <button key={idx} onClick={() => handleAnswer(ans)}>
            {ans}
          </button>
        ))}
      </div>
      
      {/* Footer section for score */}
      <footer className="trivia-footer">
        <p>Score: {score} / {questions.length}</p>
      </footer>
    </div>
  );
};

export default Trivia;
