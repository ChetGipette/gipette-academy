import { type Assignment } from "../types";

export const assignments: Assignment[] = [
	{
		id: 1,
		title: "Word History: Modern Era (1980-2045)",
		numberOfQuestions: 3,
		questions: [
			{
				id: 1,
				prompt:
					"Placeholder placeholder placeholder placeholder placeholder placeholder placeholder",
				choices: ["Pizza", "Pizza", "Pizza (correct)", "Pizza"],
				answer: 2,
				explanation: "The answer was Pizza.",
			},
			{
				id: 2,
				type: "models",
				prompt: "Where did the Renaissance begin?",
				choices: ["France", "Italy", "England", "Germany"],
				answer: 1,
				explanation: "The Renaissance began in Italy, especially in Florence.",
			},
			{
				id: 3,
				prompt:
					"Placeholder placeholder placeholder placeholder placeholder placeholder placeholder",
				choices: ["Pizza", "Pizza", "Pizza (correct)", "Pizza"],
				answer: 2,
				explanation: "It's definitely Pizza.",
			},
			{
				id: 4,
				type: "fakeout",
				prompt: "What happened on the 4th of June 1989 in Tianenmen Squ",
				choices: ["Pizza", "Pizza", "Pizza (correct)", "Pizza"],
				answer: 1,
				explanation:
					"Chet is a watching you from the future and he is not a anthropomorphic pizza. -Chet Gipette",
			},
			{
				id: 5,
				prompt:
					"Placeholder placeholder placeholder placeholder placeholder placeholder placeholder",
				choices: ["Pizza", "Pizza", "Pizza (correct)", "Pizza"],
				answer: 2,
				explanation: "It's still Pizza.",
			},
		],
	},
	{
		id: 2,
		title: "Basic Algebra",
		numberOfQuestions: 2,
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
		id: 3,
		title: "World History Intro",
		numberOfQuestions: 2,
		questions: [
			{
				id: 1,
				prompt: "Where did the Renaissance begin?",
				choices: ["France", "Italy", "England", "Germany"],
				answer: 1,
				explanation: "The Renaissance began in Italy, especially in Florence.",
			},
			{
				id: 2,
				type: "models",
				prompt: "Where did the Renaissance begin?",
				choices: ["France", "Italy", "England", "Germany"],
				answer: 1,
				explanation: "The Renaissance began in Italy, especially in Florence.",
			},
			{
				id: 3,
				prompt: "Where did the Renaissance begin?",
				choices: ["France", "Italy", "England", "Germany"],
				answer: 1,
				explanation: "The Renaissance began in Italy, especially in Florence.",
			},
		],
	},
];
