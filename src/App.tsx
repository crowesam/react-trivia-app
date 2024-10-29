// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Trivia from './components/Trivia';
import QuestionCreator from './components/QuestionCreator';
import CustomQuestionPage from './components/CustomQuestionPage'; // Import your new component

interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

const App: React.FC = () => {
  // State to manage the list of all question sets and custom question sets
  const [customQuestions, setCustomQuestions] = useState<{ category: string; questions: Question[] }[]>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Function to add a new custom question set from the user
  const handleAddCustomQuestionSet = (category: string, newQuestions: Question[]) => {
    setCustomQuestions((prev) => [...prev, { category, questions: newQuestions }]);
  };

  // Function to render the selected question set
  const renderQuestionSet = () => {
    if (activeCategory) {
      const selectedSet = customQuestions.find((set) => set.category === activeCategory);
      if (selectedSet) {
        return <Trivia questions={selectedSet.questions} category={activeCategory} />;
      }
    }
    return <p>Please select a category to start.</p>;
  };

  return (
    <Router>
      <div className="app-container">
        {/* Header Section */}
        <header className="app-header">
          <h1>Trivia App</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create Custom Questions</Link>
          </nav>
        </header>

        {/* Routes for different pages */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-body">
                <div className="content">
                  {/* List of original categories as buttons */}
                  <h2>Categories</h2>
                  <button onClick={() => setActiveCategory("Next.js")}>Next.js</button>
                  {/* Add dynamic buttons for custom categories */}
                  {customQuestions.map((set, index) => (
                    <button key={index} onClick={() => setActiveCategory(set.category)}>
                      {set.category}
                    </button>
                  ))}
                  {/* Render the selected question set */}
                  {isGameStarted && renderQuestionSet()}
                </div>
                <aside className="right-sidebar">
                  <h2>Quick Links</h2>
                  {/* Sidebar content */}
                </aside>
                <button onClick={() => setIsGameStarted(!isGameStarted)}>
                  {isGameStarted ? "Stop Game" : "Start Game"}
                </button>
              </div>
            }
          />
          <Route
            path="/create"
            element={<CustomQuestionPage onAddQuestionSet={handleAddCustomQuestionSet} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
