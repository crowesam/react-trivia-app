// PokerQuestionSet.tsx
import React from 'react';
import Trivia from './Trivia';

const PokerQuestionSet: React.FC = () => {
  // Poker-related questions
  const questionData = {
    category: "Poker",
    questions: [
      {
        question: "What is the highest possible hand in poker?",
        answers: ["Royal Flush", "Straight Flush", "Full House", "Four of a Kind"],
        correctAnswer: "Royal Flush",
      },
      {
        question: "How many cards are there in a standard deck of poker cards?",
        answers: ["40", "48", "52", "54"],
        correctAnswer: "52",
      },
      {
        question: "What is the term for betting all of your chips in a poker game?",
        answers: ["All-in", "Call", "Check", "Fold"],
        correctAnswer: "All-in",
      },
      // Add 12 more questions...
    ],
  };

  return <Trivia questions={questionData.questions} category={questionData.category} />;
};

export default PokerQuestionSet;
