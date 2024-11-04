import React from 'react';
import Trivia from './Trivia';
import ReactMarkdown from 'react-markdown'

const JavaScriptQuestionSet: JavaScript.FC = () => {
   //React-related questions
   const questionData = {
     category: "JavaScript",
     questions: [
      {
        question: `In the following code, what will \`userName\` and \`userAge\` be after destructuring?\n\n
        \`\`\`javascript
        const user = { name: 'Alice', age: 25 };
        const { name: userName, age: userAge } = user;
        \`\`\``,
              answers: [
                "userName: 'Alice', userAge: 25",
                "userName: 'Alice', userAge: undefined",
                "userName: undefined, userAge: 25",
                "userName: 'John', userAge: 30"
              ],
              correctAnswer: "userName: 'Alice', userAge: 25",
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