import React from 'react'

function Search ({ state, send }) {
  const [exercise, setExercise] = React.useState('')
  const handleSelect = e => {
    setExercise(e.target.value)
  }
  const goToSeries = () => {
    send('CONTINUE', { selectedExercise: exercise })
  }

  //const options = state.context.muscle;
  //const options = ['Legs', 'Back', 'Chest'];
  const options = Object.values(state.context.muscles)
  //console.log(Object.values(options))

  return (
    <div>
      <h2>Select a muscle group</h2>
      <div className='block-evenly'>
        <select id='exercise' value={exercise} onChange={handleSelect}>
          <option value='' disabled defaultValue>
            Muscle group
          </option>
          {options.map(
            op =>
              op?.name_en && (
                <option key={op.id} value={op.name_en}>
                  {op.name_en}
                </option>
              )
          )}
        </select>
        <button disabled={exercise === ''} onClick={goToSeries}>
          Continue
        </button>
      </div>
    </div>
  )
}

export { Search }
