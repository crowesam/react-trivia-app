// src/components/QuestionCreator.tsx
import React, { useState } from 'react';

// Interface for defining the shape of a question
interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface QuestionCreatorProps {
  onAddQuestion: (newQuestion: Question) => void;
}

const QuestionCreator: React.FC<QuestionCreatorProps> = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState<string[]>(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question && correctAnswer) {
      const newQuestion: Question = {
        question,
        answers,
        correctAnswer,
      };
      onAddQuestion(newQuestion);
      setQuestion(''); // Clear form fields after submission
      setAnswers(['', '', '', '']);
      setCorrectAnswer('');
    } else {
      alert('Please fill out all fields!');
    }
  };

  // Handle answer input change
  const handleAnswerChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  return (
    <div className="question-creator">
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </label>

        {answers.map((answer, index) => (
          <label key={index}>
            Answer {index + 1}:
            <input
              type="text"
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              required
            />
          </label>
        ))}

        <label>
          Correct Answer:
          <input
            type="text"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
          />
        </label>

        <button type="submit">Add Question</button>
      </form>
    </div>
  );
};

export default QuestionCreator;
