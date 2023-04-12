import React from 'react'

function StepLayout ({ send, state, onWelcome, onSearch, onSeries, onSummary }) {
  return (
    <>
      {state.matches('initial') && onWelcome(send)}
      {state.matches('add') && onSearch(send)}
      {state.matches('reps') && onSeries(send)}
      {state.matches('exercise') && onSummary(send)}
    </>
  )
}

export { StepLayout }
