import React from 'react'
import { useMachine } from '@xstate/react'

import { NavLayout } from './NavLayout'
import { StepLayout } from './StepLayout'
import WorkOutMachine from '../Machines/WorkOutMachine'
import { Welcome } from './Welcome'
import { Search } from './Search'
import { Series } from './Series'
import { Summary } from './Summary'

function BaseLayout () {
  const [state, send] = useMachine(WorkOutMachine)

  console.log('Nuestra maquina: ', state.value, state.context)

  return (
    <main className='main'>
      <NavLayout state={state} send={send} />
      <StepLayout
        state={state}
        send={send}
        onWelcome={send => <Welcome send={send} />}
        onSearch={send => <Search send={send} />}
        onSeries={send => <Series send={send} />}
        onSummary={send => <Summary send={send} />}
      />
    </main>
  )
}

export { BaseLayout }
