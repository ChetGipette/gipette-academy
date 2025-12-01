export type Question = {
	id: number;
	type?: "fakeout" | "models" | "chat" | "adblock";
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
