import React from 'react'

function Summary ({ send }) {
  const goToStart = () => {
    send('FINISH')
  }
  return (
    <div>
      <h2>Summary</h2>
      <h3>Muscle group</h3>
      <div className='exercises block-evenly'>
        <table>
          <tr>
            <th>Exercise Name</th>
            <th>Reps</th>
            <th>Series</th>
          </tr>
          <tr>
            <td>Press</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Push up</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </table>
      </div>
      <button onClick={goToStart}>Finish</button>
    </div>
  )
}

export { Summary }
