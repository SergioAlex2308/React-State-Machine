import { createMachine } from "xstate";

const workOutMachine = createMachine({
	id: "Let f*cking go!",
	predictableActionArguments: true,
	initial: "initial",
	states: {
		initial: {
			on: {
				START: "add",
			},
		},
		add: {
			on: {
				CONTINUE: "reps",
				CANCEL: "initial",
			},
		},
		reps: {
			on: {
				CONTINUE: "exercise",
				CANCEL: "add",
			},
		},
		exercise: {
			on: {
				FINISH: "initial",
			},
		},
	},
});

export default workOutMachine;
