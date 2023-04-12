import React from 'react'

function Welcome ({send}) {
  const startWorkOut = () => {
    send('START')
  }
  return (
    <div>
      <h2>Let's start!</h2>
      <p>Select yours exercises and get ready!</p>
      <button onClick={startWorkOut}>Start</button>
    </div>
  )
}

export { Welcome }
