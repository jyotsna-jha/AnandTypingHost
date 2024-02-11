"use client";

import React, { useEffect, useState } from "react";
import Question from "./Question"; // Ensure this component is correctly implemented
import Result from "./Result"; // This is your provided Result component

const Quiz = ({ selectedCategory, userName }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrect, setIncorrect] = useState([]);
  const [allquestions, setAllquestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (selectedCategory) {
        try {
          const url = `https://api.anandtyping.com/api/random-question-set/${selectedCategory}`;
          const response = await fetch(url);
          const data = await response.json();
          if (data && data.questions) {
            setQuestions(data.questions);
          }
        } catch (error) {
          console.error("Error fetching questions", error);
        }
      }
    };

    fetchQuestions();
  }, [selectedCategory]);

  const onAnswerSelected = (questionId, optionIndex) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    let incorrectAnswers = [];

    questions.forEach((question) => {
      const correctOptionIndex = question.options.findIndex(
        (opt) => opt.is_correct
      );
      allquestions.push({
        questionText: question.question_text,
        correctAnswer: question.options[correctOptionIndex].option_text,
      });
      if (answers[question.id] === correctOptionIndex) {
        calculatedScore += 1;
      } else {
        incorrectAnswers.push({
          questionText: question.question_text, // Corrected property name
          userAnswer: question.options[answers[question.id]].option_text,
          correctAnswer: question.options[correctOptionIndex].option_text,
        });
      }
    });

    setScore(calculatedScore);
    setIncorrect(incorrectAnswers);
    setCompleted(true);
  };

  if (completed) {
    return (
      <Result
        score={score}
        totalQuestions={questions.length}
        allquestions={allquestions}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="text-center mb-5">
        <h1 className="text-2xl font-semibold text-gray-700">Quiz Time</h1>
        <p className="text-gray-500">Good luck, {userName}!</p>
      </div>

      <div className="bg-white shadow-md rounded p-6 mb-4">
        {questions.map((question) => (
          <Question
            key={question.id}
            id={question.id}
            questionText={question.question_text}
            options={question.options}
            onAnswerSelected={onAnswerSelected}
          />
        ))}
      </div>

      <div className="text-center">
        <button
          className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
