// src/components/Quiz.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Quiz.css';

const Quiz = ({ questions }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);

  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const correctAnswers = questions.filter((q, index) => q.correct === answers[index]).length;
    setScore(correctAnswers);

    // Change unit navbar color based on score
    const unitNavbar = document.querySelector('.unit-navbar');
    if (correctAnswers === questions.length) {
      unitNavbar.style.backgroundColor = '#4CAF50'; // Green color
    } else {
      unitNavbar.style.backgroundColor = '#FF5722'; // Red color
    }
  };

  return (
    <div className="quiz-container">
      {questions.map((q, index) => (
        <motion.div
          key={index}
          className="question-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <p className="question">{q.question}</p>
          <div className="options-container">
            {q.options.map((option, i) => (
              <motion.button
                key={i}
                className="option"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleAnswer(index, i)}
                style={{
                  backgroundColor: answers[index] === i ? (i === q.correct ? '#4CAF50' : '#FF5722') : '#fff'
                }}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
      <p className="score">Score: {score}/{questions.length}</p>
    </div>
  );
};

export default Quiz;
