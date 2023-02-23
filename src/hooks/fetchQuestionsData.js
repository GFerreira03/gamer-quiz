import React, { useState, useEffect } from 'react'

function fetchQuestionsData() {

  const [response, setResponse] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => setResponse(data.results))
  }, [])

  return response
}

export default fetchQuestionsData