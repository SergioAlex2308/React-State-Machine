import React from 'react'

function Search ({ send }) {
  const [exercise, setExercise] = React.useState('')
  const handleSelect = e => {
    setExercise(e.target.value)
  }
  const goToSeries = () => {
	send('CONTINUE')
  }

  const options = ['Pullover', 'Push up', 'Pull up', 'Bench press']
  return (
    <div>
      <h1>Find a exercise</h1>
      <select id='exercise' value={exercise} onChange={handleSelect}>
        <option value='' disabled defaultValue>
          Escoge un país
        </option>
        {options.map(op => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
      <button disabled={exercise === ''} onClick={goToSeries}>Continue</button>
    </div>
  )
}

export { Search }
