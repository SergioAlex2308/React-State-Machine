import { assign, createMachine } from "xstate";

const workOutMachine = createMachine({
	id: "Let f*cking go!",
	predictableActionArguments: true,
	initial: "initial",
	context: {
		exercises: [],
		selectedExercise: '',
	},
	states: {
		initial: {
			on: {
				START: {
					target: 'add',
					actions: 'printInit'
				},
			},
		},
		add: {
			on: {
				CONTINUE: {
					target: 'reps',
					actions: assign({
						selectedExercise: (context, event) => event.selectedExercise
					})
				},
				CANCEL: "initial",
			},
		},
		reps: {
			on: {
				CONTINUE: "exercise",
				CANCEL: {
					target: 'add',
					actions: assign(
						(context, event) => context = event
					)
				},
				ADD: {
					target: 'reps',
					actions: assign(
						(context, event) => context.exercises.push(event.exercises)
					)
				}
			},
		},
		exercise: {
			on: {
				FINISH: "initial",
			},
		},
	},

},
	{
		actions: {
			printEntry: () => console.log("Print Entry"),
			printInit: () => console.log("Print Init"),
			printExit: () => console.log("Print Exit"),
		},
	});

export default workOutMachine;
