import React from 'react'

function Welcome ({send}) {
  const startWorkOut = () => {
    send('START')
  }
  return (
    <div>
      <h1>Let's start!</h1>
      <p>Select your exercise and get ready!</p>
      <button onClick={startWorkOut}>Start</button>
    </div>
  )
}

export { Welcome }
