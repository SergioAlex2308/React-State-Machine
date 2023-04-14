import { assign, createMachine } from 'xstate'
//import { fetchApi } from '../utils/api'

/* const fillMuscle = {
  initial: 'loading',
  states: {
    loading: {
      invoke: {
        id: 'getCountries',
        src: () => fetchApi,
        onDone: {
          target: 'success',
          actions: assign({
            muscles: (context, event) => {
              console.log(event.data)
			  return event.data
            }
          })
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: 'Request fail'
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
} */

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
        //...fillMuscle
      },
      reps: {
        on: {
          CONTINUE: 'exercise',
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
          5000: {
            target: 'initial',
            actions: 'cleanContext'
          }
        },
        on: {
          FINISH: 'initial'
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
    }
  }
)

export default workOutMachine
