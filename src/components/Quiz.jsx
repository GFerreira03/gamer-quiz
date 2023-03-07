import React from 'react'
import fetchQuestionsData from '../hooks/fetchQuestionsData.js'
import Question from './Question.jsx'
import { nanoid } from 'nanoid'

function Quiz() {

  const questions = fetchQuestionsData().map(question => {
    return (
      <Question
        key={nanoid()}
        question={question.question}
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