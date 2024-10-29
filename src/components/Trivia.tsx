import React, { useEffect, useState } from "react";
import "./Trivia.css";
interface TriviaProps {
  questions: {
    question: string;
    answers: string[];
    correctAnswer: string;
  }[];
  category: string;
}

const Trivia: React.FC<TriviaProps> = ({ questions, category }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [attempted, setAttempted] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(new Array(questions.length).fill(""));

  // Shuffle questions and answers once when the component mounts
  useEffect(() => {
    const shuffled = shuffleArray(questions.map(question => ({
      ...question,
      answers: shuffleArray([...question.answers]) // Shuffle answers
    })));
    setShuffledQuestions(shuffled);
  }, [questions]);

  const handleAnswerClick = (selectedOption: string) => {
    if (attempted[currentQuestionIndex]) return;

    const correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;
    const isCorrect = selectedOption === correctAnswer;

    setAttempted(prevState => {
      const updatedAttempted = [...prevState];
      updatedAttempted[currentQuestionIndex] = true;
      return updatedAttempted;
    });

    setSelectedAnswers(prevState => {
      const updatedSelected = [...prevState];
      updatedSelected[currentQuestionIndex] = selectedOption;
      return updatedSelected;
    });

    if (isCorrect) {
      setScore(score + 1);
      playRandomSound(correctSounds);
    } else {
      playRandomSound(incorrectSounds);
    }

    // Automatically move to the next question after a short delay (optional)
    // setTimeout(() => handleNext(), 1000); // Uncomment if you want this behavior
  };

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const restartGame = () => {
    window.location.reload();
  };

  return (
    <div>
      {!showResult ? (
        <div>
          <h2>{shuffledQuestions[currentQuestionIndex]?.question}</h2>
          <div className="answers-container">
            {shuffledQuestions[currentQuestionIndex]?.answers.map((option, index) => {
              const isCorrect = option === shuffledQuestions[currentQuestionIndex].correctAnswer;
              const isSelected = option === selectedAnswers[currentQuestionIndex];
              const buttonClassName = attempted[currentQuestionIndex]
                ? isCorrect
                  ? "correct-button"
                  : isSelected
                  ? "incorrect-button"
                  : "default-button"
                : "default-button";

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className={`answer-button ${buttonClassName}`}
                  disabled={attempted[currentQuestionIndex]}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="navigation-buttons">
            <button
              className="nav-button"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              className="nav-button"
              onClick={handleNext}
              disabled={currentQuestionIndex >= shuffledQuestions.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Your score: {score}/{shuffledQuestions.length}</h2>
          <button onClick={restartGame}>Try Again</button>
        </div>
      )}
    </div>
  );
};

// Helper function to shuffle an array
const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Placeholder for sound function
const correctSounds = [
  "/public/sounds/youAreAGenius.mp3",
  "/public/sounds/applause.mp3",
  "/public/sounds/fanfare.mp3",
];

const incorrectSounds = [
  "/public/sounds/defeat.mp3",
  "/public/sounds/epicFail.mp3",
  "/public/sounds/hahabully.mp3",
];

const playRandomSound = (soundArray: string[]) => {
  const soundToPlay = soundArray[Math.floor(Math.random() * soundArray.length)];
  const audio = new Audio(soundToPlay);
  audio.play();
};

export default Trivia;
