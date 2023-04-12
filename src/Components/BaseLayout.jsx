import React from 'react'
import { useMachine } from '@xstate/react'

import { NavLayout } from './NavLayout'
import { StepLayout } from './StepLayout'
import WorkOutMachine from '../Machines/WorkOutMachine'
import { Welcome } from './Welcome'
import { Search } from './Search'

function BaseLayout () {
  const [state, send] = useMachine(WorkOutMachine)

  console.log('Nuestra maquina: ', state)
  console.log('Matches', state.matches('initial'))
  console.log('Matches', state.matches('series'))
  console.log('Can', state.can('FINISH'))

  return (
    <main className='main'>
      <NavLayout state={state} send={send} />
      <StepLayout
        state={state}
        send={send}
        onWelcome={send => <Welcome send={send} />}
        onSearch={send => <Search send={send} />}
      />
    </main>
  )
}

export { BaseLayout }
