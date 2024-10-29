// QuestionSet.tsx
import React from 'react';
import Trivia from './Trivia';

const NextJSQuestionSet: NextJS.FC = () => {
  //data for NextJS category
  const questionData = {
    category: "NextJS",
    questions: [
      {
        question: "What is Next.js primarily used for?",
        answers: [
          "Server-side rendering and static site generation",
          "Client-side rendering only",
          "Mobile app development",
          "Database management"
        ],
        correctAnswer: "Server-side rendering and static site generation",
      },
      {
        question: "Which command is used to create a new Next.js project?",
        answers: [
          "create-next-app",
          "next-create-project",
          "npm init next-app",
          "next-new-project"
        ],
        correctAnswer: "create-next-app",
      },
      {
        question: "What is the purpose of the 'getStaticProps' function in Next.js?",
        answers: [
          "Fetch data at build time for static generation",
          "Handle client-side routing",
          "Send server-side API requests",
          "Authenticate users"
        ],
        correctAnswer: "Fetch data at build time for static generation",
      },
      {
        question: "What file is responsible for custom document markup in Next.js?",
        answers: [
          "_app.js",
          "_document.js",
          "index.js",
          "_error.js"
        ],
        correctAnswer: "_document.js",
      },
      {
        question: "How does Next.js handle dynamic routing?",
        answers: [
          "Using query strings",
          "Using URL parameters",
          "By creating files with square brackets [ ] in the pages directory",
          "With the Router object from React"
        ],
        correctAnswer: "By creating files with square brackets [ ] in the pages directory",
      },
      {
        question: "What is the default port for a Next.js application?",
        answers: [
          "3000",
          "8080",
          "4000",
          "8000"
        ],
        correctAnswer: "3000",
      },
      {
        question: "Which feature of Next.js allows you to pre-render pages at request time?",
        answers: [
          "getServerSideProps",
          "getStaticPaths",
          "getInitialProps",
          "useEffect"
        ],
        correctAnswer: "getServerSideProps",
      },
      {
        question: "What is the primary benefit of using 'Image' component in Next.js?",
        answers: [
          "Automatic optimization of images",
          "Integration with CSS frameworks",
          "Enhanced animations",
          "Enabling client-side navigation"
        ],
        correctAnswer: "Automatic optimization of images",
      },
      {
        question: "Which of the following is true about API routes in Next.js?",
        answers: [
          "They are defined in the 'api' directory inside 'pages'",
          "They must be defined in a separate server file",
          "They cannot be deployed on Vercel",
          "They can only be used for authentication"
        ],
        correctAnswer: "They are defined in the 'api' directory inside 'pages'",
      },
      {
        question: "Which lifecycle function can be used in Next.js for both server-side and client-side rendering?",
        answers: [
          "getInitialProps",
          "useEffect",
          "componentDidMount",
          "getServerSideProps"
        ],
        correctAnswer: "getInitialProps",
      },
      {
        question: "How do you define custom environment variables in Next.js?",
        answers: [
          "Using '.env.local' files",
          "Inside the Next.js config",
          "By adding them to 'package.json'",
          "Using 'window' object in JavaScript"
        ],
        correctAnswer: "Using '.env.local' files",
      },
      {
        question: "What is 'getStaticPaths' used for in Next.js?",
        answers: [
          "To generate dynamic paths for static pages at build time",
          "To manage client-side routing",
          "To authenticate user sessions",
          "To configure the Next.js server"
        ],
        correctAnswer: "To generate dynamic paths for static pages at build time",
      },
      {
        question: "How can you optimize page performance in Next.js?",
        answers: [
          "Using static generation or server-side rendering",
          "Only using client-side rendering",
          "Writing custom React hooks",
          "Using CSS-in-JS libraries exclusively"
        ],
        correctAnswer: "Using static generation or server-side rendering",
      },
      {
        question: "Which command do you use to build your Next.js project for production?",
        answers: [
          "next build",
          "npm run build",
          "build-next",
          "next start"
        ],
        correctAnswer: "next build",
      },
      {
        question: "What is the main configuration file in a Next.js project called?",
        answers: [
          "next.config.js",
          "next.js",
          "config.js",
          "app.config.js"
        ],
        correctAnswer: "next.config.js",
      },
    ],
  };
  

  return <Trivia questions={questionData.questions} category={questionData.category} />;
};

export default NextJSQuestionSet;
