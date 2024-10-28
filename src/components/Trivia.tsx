import React, { useEffect, useState } from "react";

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

  // Shuffle questions and answers once when the component mounts
  useEffect(() => {
    const shuffled = shuffleArray(questions.map(question => ({
      ...question,
      answers: shuffleArray([...question.answers]) // Shuffle answers
    })));
    setShuffledQuestions(shuffled);
  }, [questions]);

  const handleAnswerClick = (selectedOption: string) => {
    const correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
      setScore(score + 1);
      playRandomSound(correctSounds); // Play a random correct sound
    } else {
      playRandomSound(incorrectSounds); // Play a random incorrect sound
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      {!showResult ? (
        <div>
          <h2>{shuffledQuestions[currentQuestionIndex]?.question}</h2>
          {shuffledQuestions[currentQuestionIndex]?.answers.map((option, index) => (
            <button key={index} onClick={() => handleAnswerClick(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Your score: {score}/{shuffledQuestions.length}</h2>
          <button onClick={() => window.location.reload()}>Try Again</button>
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
  "/public/sounds/ applause.mp3",
  "/public/sounds/fanfare.mp3",
  "/public/sounds/youAreAGenius.mp3",
  // "/public/sounds/youAreAGenius.mp3",
];

const incorrectSounds = [
  "/public/sounds/defeat.mp3",
  "/public/sounds/epicFail.mp3",
  "/public/sounds/hahabully.mp3",
  "/public/sounds/yousuck.mp3",
  // "/public/sounds/epicFail.mp3",
];

const playRandomSound = (soundArray: string[]) => {
  const soundToPlay = soundArray[Math.floor(Math.random() * soundArray.length)];
  const audio = new Audio(soundToPlay);
  audio.play();
};

export default Trivia;
