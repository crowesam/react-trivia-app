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
  // States to track current question index and score
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Handler for selecting an answer
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
    <div>
      <h1>{category} Quiz</h1>
      <div>
        <p>{questions[currentQuestion].question}</p>
        {questions[currentQuestion].answers.map((ans, idx) => (
          <button key={idx} onClick={() => handleAnswer(ans)}>
            {ans}
          </button>
        ))}
      </div>
      <p>Score: {score}</p>
    </div>
  );
};

export default Trivia;