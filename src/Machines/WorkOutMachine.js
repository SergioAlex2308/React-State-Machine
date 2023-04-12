import { createMachine } from "xstate";

const workOutMachine = createMachine({
	id: "Let f*cking go!",
	initial: "initial",
	states: {
		initial: {
			on: {
				START: "add",
			},
		},
		add: {
			on: {
				CONTINUE: "repetition",
				CANCEL: "initial",
			},
		},
		repetition: {
			on: {
				CONTINUE: "series",
				CANCEL: "add",
			},
		},
		series: {
			on: {
				CONTINUE: "exercise",
				CANCEL: "repetition",
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
