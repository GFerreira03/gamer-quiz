import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  let navigate = useNavigate()
  const startPlay = () => {
    navigate('/quiz')
  }
  return (
    <>
      <div className='fixed flex flex-col justify-center content-center items-center top-0 bottom-0 left-0 right-0 '>
        <h1 className='font-bold text-6xl md:text-9xl leading-[3rem] mb-5'>
          GAMER<br />QUIZ
        </h1>
        <button onClick={startPlay} className='text-purple-light text-3xl px-5 py-2 hover:text-white hover:bg-purple-light transition-all' >Play</button>
      </div>
    </>
  )
}

export default Home