import React, { useState } from 'react'

function Series ({ send }) {
  const defaultExercise = {
    nameExercise: '',
    repCounter: 0,
    seriesCounter: 0
  }
  const [listExercise, setListExercise] = useState([])
  const [exerciseUser, setExerciseUser] = useState(defaultExercise)

  //const [repCounter, setRepCounter] = React.useState(0)
  const repIncrease = () => {
    setExerciseUser({
      ...exerciseUser,
      repCounter: exerciseUser.repCounter + 1
    })
  }
  const repDecrease = () => {
    setExerciseUser({
      ...exerciseUser,
      repCounter: exerciseUser.repCounter - 1
    })
  }

  //const [seriesCounter, setseriesCounter] = React.useState(0)
  const seriesIncrease = () => {
    setExerciseUser({
      ...exerciseUser,
      seriesCounter: exerciseUser.seriesCounter + 1
    })
  }
  const seriesDecrease = () => {
    setExerciseUser({
      ...exerciseUser,
      seriesCounter: exerciseUser.seriesCounter - 1
    })
  }

  const handleName = e => {
    setExerciseUser({
      ...exerciseUser,
      nameExercise: e.target.value
    })
  }
  const addExercise = e => {
    e.preventDefault()

    const nameExercise = exerciseUser.nameExercise
    listExercise.push(nameExercise)
    const listAux = [...listExercise]
    setListExercise([...listAux])

    send('ADD', { exercises: exerciseUser })
    setExerciseUser(defaultExercise)
  }

  const goToSummary = () => {
    send('CONTINUE')
  }
  return (
    <div>
      <h3>What exercises will we do today?</h3>
      <form className='block-evenly margin-y' onSubmit={addExercise}>
        <input
          type='text'
          placeholder='Exercise name...'
          value={exerciseUser.nameExercise}
          onChange={handleName}
          required
        />
        <div className='container-counter'>
          <div className='counter'>
            <p>Reps</p>
            <div className='counter-button'>
              <button type='button' onClick={repIncrease}>
                +
              </button>
              <p>{exerciseUser.repCounter}</p>
              <button
                type='button'
                disabled={exerciseUser.repCounter < 1}
                onClick={repDecrease}
              >
                -
              </button>
            </div>
          </div>
          <div className='counter'>
            <p>Series</p>
            <div className='counter-button'>
              <button type='button' onClick={seriesIncrease}>
                +
              </button>
              <p>{exerciseUser.seriesCounter}</p>
              <button
                type='button'
                disabled={exerciseUser.seriesCounter < 1}
                onClick={seriesDecrease}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <button
          disabled={
            exerciseUser.repCounter === 0 || exerciseUser.seriesCounter === 0
          }
          type='submit'
        >
          Add exercise
        </button>
      </form>
      <div className='list-exercise'>
        {listExercise.length > 0 ? (
          <ul>
            {listExercise.map((ex, index) => (
              <li key={index}>{ex}</li>
            ))}
          </ul>
        ) : (
          <p>There is not exercise to show</p>
        )}
      </div>
      <button
        className='continue'
        disabled={listExercise.length === 0}
        onClick={goToSummary}
      >
        Continue
      </button>
    </div>
  )
}

export { Series }
