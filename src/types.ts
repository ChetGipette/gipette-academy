export type Question = {
	id: number;
	type?: "fakeout" | "models";
	prompt: string;
	choices: string[];
	answer: number;
	explanation?: string;
};

export type Assignment = {
	id: number;
	title: string;
	numberOfQuestions: number;
	questions: Question[];
};
