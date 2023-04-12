import React from 'react'

function StepLayout ({ send, state, onWelcome, onSearch }) {
  return <>
  {state.matches('initial') && onWelcome(send)}
  {state.matches('add') && onSearch(send)}
  </>
}

export { StepLayout }
