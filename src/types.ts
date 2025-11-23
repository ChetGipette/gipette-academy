export type Question = {
	id: number;
	prompt: string;
	choices: string[];
	answer: number;
	explanation?: string;
};

export type Assignment = {
	id: number;
	title: string;
	questions: Question[];
};
