import React from 'react';
import Trivia from './Trivia';

const ReactQuestionSet: React.FC = () => {
   //React-related questions
   const questionData = {
     category: "React",
     questions: [
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
      // Add 17 more common mistakes questions...
    ],
  };

       return <Trivia questions={questionData.questions} category={questionData.category}/>
      };

      export default ReactQuestionSet;