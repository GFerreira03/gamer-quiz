import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GamesQuiz from './pages/GamesQuiz'
import Home from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<GamesQuiz />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App