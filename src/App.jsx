import React from 'react'

//Components
import Quiz from './components/Quiz'

function App() {

  return (
    <>
      <h1 className='fixed top-0 left-0 right-0 z-10 py-4 pl-5 font-bold leading-6 bg-white shadow'>
        GAMER<br />QUIZ
      </h1>
      <Quiz />
    </>
  )
}

export default App