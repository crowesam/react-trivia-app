// src/components/CustomQuestionPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionCreator from './QuestionCreator';

interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface CustomQuestionPageProps {
  onAddQuestionSet: (category: string, questions: Question[]) => void;
}

const CustomQuestionPage: React.FC<CustomQuestionPageProps> = ({ onAddQuestionSet }) => {
  const [category, setCategory] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const navigate = useNavigate();

  // Function to add a new question from the user
  const handleAddQuestion = (newQuestion: Question) => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  // Handle form submission to create a new question set
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (category && questions.length > 0) {
      onAddQuestionSet(category, questions);
      navigate('/'); // Navigate back to home after creating the question set
    } else {
      alert('Please fill out all fields and add at least one question!');
    }
  };

  return (
    <div className="custom-question-page">
      <h2>Create Your Own Question Set</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Category Name:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>
        <QuestionCreator onAddQuestion={handleAddQuestion} />
        <button type="submit">Save Question Set</button>
      </form>
    </div>
  );
};

export default CustomQuestionPage;
