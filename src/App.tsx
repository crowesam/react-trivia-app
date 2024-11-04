// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Trivia from './components/Trivia';
import CustomQuestionPage from './components/CustomQuestionPage';

interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

// Example question sets for default categories (import these from separate files if they are too large)
const ReactQuestions: Question[] =  [
 {
   question: "Which of the following is a common mistake when using useEffect?",
   answers: [
     "Not providing a dependency array",
     "Using it to fetch data without cleaning up",
     "Mutating state directly within useEffect",
     "All of the above"
   ],
   correctAnswer: "All of the above",
 },
 {
   question: "Why should state updates in React be done with a set function?",
   answers: [
     "To ensure React knows to re-render",
     "For improved memory management",
     "Because direct mutation leads to immutability",
     "All of the above"
   ],
   correctAnswer: "To ensure React knows to re-render",
 },
 {
   question: "What happens if you forget to wrap a child component with a provider context?",
   answers: [
     "It won’t have access to the context’s value",
     "It will still receive default context values",
     "React will throw an error",
     "Nothing happens"
   ],
   correctAnswer: "It won’t have access to the context’s value",
 },
 // Add more common mistakes questions...
];
const nextJsQuestions: Question[] = [
  {
    question: "What is Next.js primarily used for?",
    answers: [
      "Server-side rendering and static site generation",
      "Client-side rendering only",
      "Mobile app development",
      "Database management",
    ],
    correctAnswer: "Server-side rendering and static site generation",
  },
  // Add more Next.js questions as needed
];

const pokerQuestions: Question[] = [
  {
    question: "What is the highest possible hand in poker?",
    answers: ["Royal Flush", "Straight Flush", "Full House", "Four of a Kind"],
    correctAnswer: "Royal Flush",
  },
  // Add more poker questions as needed
];

// Define the default categories
const defaultCategories = [
  { name: "React", questions: ReactQuestions },
  { name: "Next.js", questions: nextJsQuestions },
  // { name: "JavaScript", questions: JavaScriptQuestions },
  { name: "Poker", questions: pokerQuestions },
];

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
 // const renderQuestionSet = () => {
  //   const selectedSet = defaultCategories.find((cat) => cat.name === activeCategory) ||
  //                       customQuestions.find((set) => set.category === activeCategory);
  //   if (selectedSet) {
  //     return <Trivia questions={selectedSet.questions} category={activeCategory || ''} />;
  //   }
  //   return <p>Please select a category to start.</p>;
  // };

  return (
    <Router>
      <div className="app-container">
        {/* Header Section */}
        <header className="app-header">
          <h1>Trivia App</h1>
          <nav>
            {/* <Link to="/">Home</Link> */}
           {/* <Link to="/create">Create Custom Questions</Link> */}
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
                  {defaultCategories.map((category, index) => (
                    <button key={index} onClick={() => setActiveCategory(category.name)}>
                      {category.name}
                    </button>
                  ))}

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
                <button className="startbtn" onClick={() => setIsGameStarted(!isGameStarted)}>
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
