import React from 'react'

function Series ({send}) {
  const [repCounter, setRepCounter] = React.useState(0)
  const repIncrease = () => {
    setRepCounter(repCounter + 1)
  }
  const repDecrease = () => {
    setRepCounter(repCounter - 1)
  }

  const [seriesCounter, setseriesCounter] = React.useState(0)
  const seriesIncrease = () => {
    setseriesCounter(repCounter + 1)
  }
  const seriesDecrease = () => {
    setseriesCounter(repCounter - 1)
  }

  const goToSummary = () => {
    send('CONTINUE')
  }
  return (
    <div>
      <div className='container-counter'>
        <div className='counter'>
          <h2>Reps</h2>
          <p>{repCounter}</p>
          <div className='counter-button'>
            <button onClick={repIncrease}>+</button>
            <button onClick={repDecrease}>-</button>
          </div>
        </div>
        <div className='counter'>
          <h2>Reps</h2>
          <p>{seriesCounter}</p>
          <div className='counter-button'>
            <button onClick={seriesIncrease}>+</button>
            <button onClick={seriesDecrease}>-</button>
          </div>
        </div>
      </div>
	  <button onClick={goToSummary}>Continue</button>
    </div>
  )
}

export { Series }
