import React from 'react'

function NavLayout ({ state, send }) {
  const onCancel = () => {
    send('CANCEL')
  }
  return (
    <nav className='nav'>
      <h1>Work out!!</h1>
      {!state.matches('initial') && !state.matches('exercise') && (
        <button onClick={onCancel}>Back</button>
      )}
    </nav>
  )
}

export { NavLayout }
