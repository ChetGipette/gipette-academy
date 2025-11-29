export type Question = {
	id: number;
	type?: "fakeout";
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
