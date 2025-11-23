import { type Assignment } from "../types";

export const assignments: Assignment[] = [
	{
		id: 1,
		title: "Basic Algebra",
		questions: [
			{
				id: 1,
				prompt: "What is 2 + 2?",
				choices: ["3", "4", "5", "22"],
				answer: 1,
				explanation:
					"2 + 2 = 4 because addition combines quantities into a total.",
			},
			{
				id: 2,
				prompt: "Solve for x: 3x = 12",
				choices: ["2", "3", "4", "6"],
				answer: 2,
				explanation: "Divide both sides by 3: x = 12 / 3 = 4.",
			},
		],
	},
	{
		id: 2,
		title: "World History Intro",
		questions: [
			{
				id: 1,
				prompt: "Where did the Renaissance begin?",
				choices: ["France", "Italy", "England", "Germany"],
				answer: 1,
				explanation: "The Renaissance began in Italy, especially in Florence.",
			},
		],
	},
];
