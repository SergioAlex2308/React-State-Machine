import React from 'react'

function Series ({ send }) {
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

  const addExercise = e => {
    e.preventDefault()
  }

  const goToSummary = () => {
    send('CONTINUE')
  }
  return (
    <div>
      <form className='block-evenly margin-y' onSubmit={addExercise}>
        <input type='text' />
        <div className='container-counter'>
          <div className='counter'>
            <p>Reps</p>
            <div className='counter-button'>
              <button onClick={repIncrease}>+</button>
              <p>{repCounter}</p>
              <button onClick={repDecrease}>-</button>
            </div>
          </div>
          <div className='counter'>
            <p>Series</p>
            <div className='counter-button'>
              <button onClick={seriesIncrease}>+</button>
              <p>{seriesCounter}</p>
              <button onClick={seriesDecrease}>-</button>
            </div>
          </div>
        </div>
        <button>Add exercise</button>
      </form>
      <div className="list-exercise">
        <ul>
          <li>Press</li>
          <li>Push up</li>
        </ul>
      </div>
      <button onClick={goToSummary}>Continue</button>
    </div>
  )
}

export { Series }
