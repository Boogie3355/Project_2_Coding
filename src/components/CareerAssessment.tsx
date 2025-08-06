import * as React from 'react';
import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
}

const CareerAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions: Question[] = [
    {
      id: 1,
      question: "Which activities do you enjoy the most?",
      options: [
        "Solving complex problems",
        "Creating visual designs",
        "Working with people",
        "Analyzing data"
      ]
    },
    {
      id: 2,
      question: "What type of work environment do you prefer?",
      options: [
        "Fast-paced startup",
        "Established corporation",
        "Remote work",
        "Flexible environment"
      ]
    },
    // Add more questions as needed
  ];

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Career Assessment Quiz</h2>
      {currentQuestion < questions.length ? (
        <div>
          <h3 className="text-xl mb-4">{questions[currentQuestion].question}</h3>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full p-3 text-left rounded-lg hover:bg-blue-50 border border-gray-200"
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-4 text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-xl mb-4">Assessment Complete!</h3>
          <p>Based on your answers, we recommend the following career paths...</p>
          {/* Add career recommendation logic here */}
        </div>
      )}
    </div>
  );
};

export default CareerAssessment; 