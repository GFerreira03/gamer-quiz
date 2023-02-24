import React from 'react'

function Header() {

  function reload() {
    window.location.reload()
  }

  return (
    <header className='fixed flex justify-between top-0 left-0 right-0 z-10 py-4 px-5 bg-white shadow'>
      <h1 className='font-bold leading-6'>
        GAMER<br />QUIZ
      </h1>
      <button onClick={reload}>Restart</button>
    </header>
  )
}

export default Header