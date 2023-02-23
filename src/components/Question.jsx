import React, { useState, useEffect } from 'react'
import { decode } from 'html-entities'
import { nanoid } from 'nanoid'

function Question(props) {
  const { question, incorrect, correct, isFinished, checkAnswer } = props
  const [answer, setAnswer] = useState()

  useEffect(() => {
    checkAnswer(answer, correct)
  }, [isFinished])

  function handleChange(event) {
    const { value } = event.target
    setAnswer(value)
  }
  console.log(`answer:: ${answer}`)

  const name = nanoid()
  const answers = [...incorrect, correct]
  const options = answers.map(opt => {
    const id = nanoid()
    return (
      <div key={id}>
        <input
          type="radio"
          name={name}
          id={id}
          onChange={handleChange}
          value={opt}
          checked={answer === opt}
          className='hidden peer' />
        <label
          htmlFor={id}
          className={`${opt === correct && isFinished ? 'bg-opacity-80 text-white' : 'bg-opacity-15'} bg-purple-light flex pl-3 py-2 rounded text-purple-dark w-[100%] peer-checked:ring-1 peer-checked:ring-purple-dark peer-checked:ring-offset-1`}>
          {decode(opt)}
        </label>
      </div>
    )
  })
  return (
    <div className='grid gap-3 px-6'>
      <h3>{decode(question)}</h3>
      <div className='grid gap-2 mb-6'>
        {options}
      </div>
    </div>
  )
}

export default Question