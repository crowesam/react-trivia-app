// App.tsx
import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import ReactQuestionSet from './components/ReactQuestionSet';
import NextJSQuestionSet from './components/NextJSQuestionSet';
import PokerQuestionSet from './components/PokerQuestionSet';
// Import other question sets if needed...

const App: React.FC = () => {
  // State to manage which game category is active
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isGameStarted, setIsGameStarted] = useState(false);

  // Handler to start a game based on the selected category
  const handleStartGame = (category: string) => {
    setActiveCategory(category);
    setIsGameStarted(true);
  };

  // Function to render the selected question set component based on category
  const renderQuestionSet = () => {
    switch (activeCategory) {
      case "React":
        return <ReactQuestionSet />;
        case "NextJS":
        return <NextJSQuestionSet />;
        case "Poker":
        return <PokerQuestionSet />;
      
      // Add other cases here for other categories...
      default:
        return <p className="msg-select-set">Please select a category to start.</p>;
    }
  };

  return (
    <div className="app">
      {/* Navigation section to select categories */}
      {!isGameStarted && (
        <>
          <SplashScreen />
          <nav>
            <button onClick={() => handleStartGame("React")}>React</button>
            <button onClick={() => handleStartGame("NextJS")}>NextJS</button>
            <button onClick={() => handleStartGame("Poker")}>Poker</button>
            {/* Add buttons for additional categories */}
          </nav>
        </>
      )}

      {/* Trivia game content based on the selected category */}
      {isGameStarted && renderQuestionSet()}

      {/* Restart or go back to the main screen button */}
      {isGameStarted && (
        <button onClick={() => setIsGameStarted(false)}>Go Back</button>
      )}
    </div>
  );
};

export default App;
