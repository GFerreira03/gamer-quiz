import React, { useState, useEffect } from 'react'
import { decode } from 'html-entities'
import { nanoid } from 'nanoid'

function Question(props) {
  const { question, questionNumber, incorrect, correct } = props
  const [answered, setAnswered] = useState(false)
  const [answer, setAnswer] = useState('')

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const [answers, setAnswers] = useState(shuffle([...incorrect, correct]))

  function check(opt) {
    setAnswer(opt)
    setAnswered(true)
  }

  const options = answers.map(opt => {
    const id = nanoid()
    return (
      <div key={id}>
        <button
          onClick={() => check(opt)}
          className={`bg-purple-light w-[100%] text-left py-2 px-3 rounded-sm 
            ${answered && opt === correct ? 'text-white font-semibold' : 'bg-opacity-15'}
            ${answered && opt === answer ? 'ring-1 ring-offset-1 ring-purple-dark' : ''}`}
          disabled={answered}>
          {decode(opt)}
        </button>
      </div>
    )
  })
  return (
    <div className='grid gap-3 px-6'>
      <h3><span className='text-purple-light font-bold text-3xl opacity-70'>0{questionNumber}. </span>{decode(question)}</h3>
      <div className='grid gap-2 mb-6'>
        {options}
      </div>
    </div>
  )
}

export default Question