import { assign, createMachine } from 'xstate'
import { fetchApi } from '../utils/api'

const fillMuscle = {
  initial: 'loading',
  states: {
    loading: {
      invoke: {
        id: 'getMuscle',
        src: () => fetchApi,
        onDone: {
          target: 'success',
          actions: assign({
            muscles: (context, event) => event.data.results
          })
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: 'Fallo el request'
          })
        }
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: 'loading' }
      }
    }
  }
}

const workOutMachine = createMachine(
  {
    id: 'workout',
    predictableActionArguments: true,
    initial: 'initial',
    context: {
      exercises: [],
      selectedExercise: '',
      muscles: [],
      error: ''
    },
    states: {
      initial: {
        on: {
          START: {
            target: 'add'
          }
        }
      },
      add: {
        on: {
          CONTINUE: {
            target: 'reps',
            actions: 'selectExercise'
          },
          CANCEL: 'initial'
        },
        ...fillMuscle
      },
      reps: {
        on: {
          CONTINUE: {
            target: 'exercise',
            cond: 'moreThanOneExercise'
          },
          CANCEL: {
            target: 'add',
            actions: 'cleanContext'
          },
          ADD: {
            target: 'reps',
            actions: 'addExercise'
          }
        }
      },
      exercise: {
        after: {
          8000: {
            target: 'initial',
            actions: 'cleanContext'
          }
        },
        on: {
          FINISH: {
            target: 'initial',
            actions: 'cleanContext'
          }
        }
      }
    }
  },
  {
    actions: {
      cleanContext: assign((context, event) => (context = event)),
      selectExercise: assign({
        selectedExercise: (context, event) => event.selectedExercise
      }),
      addExercise: assign((context, event) =>
        context.exercises.push(event.exercises)
      )
    },
    guards: {
      moreThanOneExercise: context => {
        return context.exercises.length > 0
      }
    }
  }
)

export default workOutMachine
