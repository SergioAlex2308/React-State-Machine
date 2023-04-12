import React from 'react'

function Summary ({ send }) {
	const goToStart = () => {
		send('FINISH')
	}
  return (
    <div>
      <h2>Summary</h2>
      <div className='container-summary'>
        <p>Exercise name</p>
        <div className='counter'>
          <div className='counter-item'>
            <p>Series: 0</p>
            <p>Reps: 0</p>
          </div>
        </div>
      </div>
      <button onClick={goToStart}>Finish</button>
    </div>
  )
}

export { Summary }
