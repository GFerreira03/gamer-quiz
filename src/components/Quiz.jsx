import React, { useState } from 'react'
import fetchQuestionsData from '../hooks/fetchQuestionsData.js'
import Question from './Question.jsx'
import { nanoid } from 'nanoid'

function Quiz() {

  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  function checkAnswer(answer, correct) {
    if (answer === correct) {
      setScore(prev => prev + 1)
    }
  }

  function finish() {
    setIsFinished(true)
  }

  const questions = fetchQuestionsData().map(question => {
    return (
      <Question
        key={nanoid()}
        question={question.question}
        incorrect={question.incorrect_answers}
        correct={question.correct_answer}
        checkAnswer={checkAnswer}
        isFinished={isFinished} />
    )
  })

  return (
    <section className='mt-24'>
      {questions}
      <div className='flex items-center px-6 mb-5'>
        <h2 className='flex-1 font-bold text-center text-purple-dark'>{score}/5</h2>
        <button onClick={finish} className='px-2 py-1 border rounded border-purple-dark border-opacity-30'>Finish</button>
      </div>
    </section>
  )
}

export default Quiz