import React from 'react'
import fetchQuestionsData from '../hooks/fetchQuestionsData.js'
import Question from './Question.jsx'
import { nanoid } from 'nanoid'

function Quiz() {
  let questionNumber = 0
  const questions = fetchQuestionsData().map(question => {
    questionNumber++
    return (
      <Question
        key={nanoid()}
        question={question.question}
        questionNumber={questionNumber}
        incorrect={question.incorrect_answers}
        correct={question.correct_answer} />
    )
  })

  return (
    <section className='mt-24 md:max-w-4xl m-auto'>
      {questions}
    </section>
  )
}

export default Quiz