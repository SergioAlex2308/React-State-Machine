import React from 'react'

function Summary ({ context, send }) {
  const goToStart = () => {
    send('FINISH')
  }
  return (
    <div>
      <h2>Summary</h2>
      <h3>{context.selectedExercise}</h3>
      <div className='exercises block-evenly'>
        <table>
          <tbody>
            <tr>
              <th>Exercise Name</th>
              <th>Reps</th>
              <th>Series</th>
            </tr>
            {context.exercises.map((ex, index) => (
              <tr key={index}>
                <td>{ex.nameExercise}</td>
                <td>{ex.repCounter}</td>
                <td>{ex.seriesCounter}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className='continue' onClick={goToStart}>Finish</button>
    </div>
  )
}

export { Summary }
