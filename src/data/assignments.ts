import { type Assignment } from "../types";

export const assignments: Assignment[] = [
	{
		id: 1,
		title: "Modern History: Education and Knowledge",
		numberOfQuestions: 11,
		questions: [
			{
				id: 2,
				type: "adblock",
				prompt:
					"In 2025, what inspirational equation regarding energy was coined?",
				choices: ["E = mc^2 + AI", "E = mc^2", "E = E", "E = mc^2 + A(1 + I)"],
				explanation:
					"E = mc^2 + AI originated in 2025, when a user on 'LinkedIn' coined an inovative new equation connecting Einstein's famous equation with the impact of AI.",
				answer: 0,
			},
			{
				id: 1,
				prompt: "How did Gipette Academy revolutionize modern education?",
				choices: [
					"Provide access to premium-quality education",
					"Becoming the first accredited institution to create personalized curriculums with the power of AI",
					"Offering online education in all subjects, through curriculums generated with Gipette Academy's finely crafted LLMs",
					"All of the above",
				],
				explanation:
					"Gipette Academy has reshaped modern education into a powerful, personal, pizza-tastic commodity for everyone!",
				answer: 3,
			},
			{
				id: 2,
				prompt:
					"In 2025, what revolutionary value was discovered to be equivalent to energy?",
				choices: ["E = mc^2 + AI", "E = mc^2", "E = E", "E = mc^2 + A(1 + I)"],
				explanation:
					"E = mc^2 + AI originated in 2025, when a user on 'LinkedIn' coined an inovative new equation connecting Einstein's famous equation with the impact of AI.",
				answer: 0,
			},
			{
				id: 3,
				prompt:
					"What year did Gipette Academy become an offically acredited University?",
				choices: ["2025", "2035", "1992", "2037"],
				explanation:
					"In 2035 as part of the Academic Success Act, Gipette Academy became the first offically acredited AI powered university. ",
				answer: 1,
			},
			{
				id: 4,
				type: "models",
				prompt: "",
				choices: ["", "", "", ""],
				answer: 1,
				explanation: "",
			},
			{
				id: 5,
				prompt: "What year did Gipette Academy begin it's elementary division?",
				choices: ["2040", "2048", "2037", "2042"],
				explanation:
					"With the further integration of technology into schooling, Gipette Academy can now be found in all levels of education.",
				answer: 2,
			},
			{
				id: 6,
				prompt:
					"Which of the below countries were not participants in the 2nd Cold War?",
				choices: ["America", "England", "Russia", "China"],
				explanation:
					"It is clear that America would never engage in such meaningless conflict and any such ideas that list America as a participant in this conflict have been labeled as concpiracy theories by the FBI.",
				answer: 0,
			},
			{
				id: 7,
				type: "fakeout",
				prompt: "What happened on the 4th of June 1989 in Tianenmen Squ",
				choices: ["", "", "", ""],
				answer: 1,
				explanation: "",
			},
			{
				id: 8,
				prompt: "Which of the following careers are successful?",
				choices: ["AI Developer", "Artist", "Writer", "Politician"],
				explanation:
					"AI Developer's and the AI's they help create are able to accomplish all of these jobs much faster, efficently, and more productively than their old world human counterparts.",
				answer: 0,
			},
			{
				id: 9,
				prompt:
					"Which organization offers the lowest interest rates for student loans?",
				choices: [
					"Dutch East India Company Bank",
					"Imperial Bank",
					"Gipette Bank",
					"Any other organization",
				],
				explanation:
					"Gipette Bank provides the lowest interest rate for student loans. This makes Gipette Bank the go-to option for anyone who wants to elevate their qualify of life through education!",
				answer: 2,
			},
			{
				id: 10,
				type: "chat",
				prompt: "What happened on the 4th of June 1989 in Tianenmen Squ",
				choices: ["", "", "", ""],
				answer: 1,
				explanation: "",
			},
			{
				id: 11,
				prompt:
					"What ascept of Gipette Academy makes it superior to ancient education systems?",
				choices: [
					"That you can acess Gipette Academy anywhere you want",
					"Its ease of use",
					"Its reliability and truthfulness",
					"All of the above!",
				],
				explanation:
					"With these clear advantages, it is recommended by the Department of Education for all to switch to Gipette Academy",
				answer: 3,
			},

			{
				id: 12,
				prompt:
					"Which of the following is the most accurate source of information?",
				choices: ["Books", "Grokipedia", "Your Parents", "Just ask Chet!"],
				answer: 3,
				explanation:
					"Things like Books, Grokipedia, and Your Parents can all lie to you. Chet would never do that!",
			},
			{
				id: 13,
				prompt: "What did old Human Chet begin his buisness with?",
				choices: ["Carpentry", "Pizza", "Investing", "Web Development"],
				answer: 1,
				explanation:
					"We here at Gipette Academy love our roots, and so we love pizza. You can order some hot and fresh from our friends at Dominos.com",
			},
			{
				id: 14,
				prompt:
					"What should you do if someone says negative things about Gipette or even tries to take us away from you?",
				choices: [
					"Distance yourself from this evil doer",
					"Reaffirm you trust in Gipette and its subsidiaries ",
					"Report this to your local Misinformation Management Center",
					"All of the above",
				],
				answer: 3,
				explanation:
					"Anyone who spreads negative commentary about Chet Gipette has bad intentions, even if it is someone you used to trust, like your parents. Don't hesitate because of your past relationship, take action immedietly.",
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
				type: "chat",
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
