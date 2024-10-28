// QuestionSet.tsx
import React from 'react';
import Trivia from './Trivia';

const QuestionSet: React.FC = () => {
  // Sample question data for one category
  const questionData = {
    category: "General Knowledge",
    questions: [
      {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: "Paris",
      },
      {
        question: "What is the tallest mountain in the world?",
        answers: ["K2", "Kangchenjunga", "Mount Everest", "Denali"],
        correctAnswer: "Mount Everest",
      },
      // Add 13 more questions...
    ],
  };

  return <Trivia questions={questionData.questions} category={questionData.category} />;
};

export default QuestionSet;
