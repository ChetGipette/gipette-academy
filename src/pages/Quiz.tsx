import { useState } from "react";
import { type Assignment } from "../types";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
	assignment: Assignment;
	returnHome: () => void;
};

export default function Quiz({ assignment, returnHome }: Props) {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
	const [feedback, setFeedback] = useState<null | {
		correct: boolean;
		explanation: string;
	}>(null);

	const q = assignment.questions[currentQuestion];

	const checkAnswer = (choiceIndex: number) => {
		setSelectedChoice(choiceIndex);
		const correct = choiceIndex === q.answer;
		setFeedback({ correct, explanation: q.explanation ?? "" });
	};

	const nextQuestion = () => {
		if (currentQuestion + 1 < assignment.questions.length) {
			setCurrentQuestion(currentQuestion + 1);
			setSelectedChoice(null);
			setFeedback(null);
		} else {
			alert("You finished the assignment!");
			returnHome();
		}
	};
	return (
		<motion.div
			key={currentQuestion}
			initial={{ opacity: 0, x: 50 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -50 }}
			transition={{ duration: 0.5 }}
		>
			<h2 className="text-2xl font-semibold mb-4 text-center">
				{assignment.title}
			</h2>
			<p className="text-lg font-medium mb-2 text-center">
				Question {currentQuestion + 1} / {assignment.questions.length}
			</p>
			<p className="mb-6 text-gray-800 text-center">{q.prompt}</p>

			<div className="grid gap-3">
				{q.choices.map((c, idx) => (
					<motion.button
						key={idx}
						whileHover={{ scale: selectedChoice === null ? 1.02 : 1 }}
						whileTap={{ scale: selectedChoice === null ? 0.98 : 1 }}
						className={`p-3 border rounded-xl text-left transition
${selectedChoice === null ? "hover:bg-gray-100" : ""}
${selectedChoice === idx && feedback ? (feedback.correct ? "bg-green-200 border-green-600" : "bg-red-200 border-red-600") : ""}`}
						onClick={() => selectedChoice === null && checkAnswer(idx)}
						disabled={selectedChoice !== null}
					>
						{c}
					</motion.button>
				))}
			</div>

			<AnimatePresence>
				{feedback && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className={`mt-6 p-4 rounded-xl border text-center shadow
${feedback.correct ? "bg-green-50 border-green-400" : "bg-red-50 border-red-400"}`}
					>
						<p className="font-semibold mb-2">
							{feedback.correct ? "Correct!" : "Incorrect"}
						</p>
						<p className="text-gray-700">{feedback.explanation}</p>
					</motion.div>
				)}
			</AnimatePresence>

			{selectedChoice !== null && (
				<motion.button
					onClick={nextQuestion}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 mx-auto block"
				>
					Next
				</motion.button>
			)}
		</motion.div>
	);
}
// type Props = {
// 	assignment: Assignment;
// 	returnHome: () => void;
// };
//
// export default function Quiz({ assignment, returnHome }: Props) {
// 	const [currentQuestion, setCurrentQuestion] = useState(0);
// 	const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
// 	const [feedback, setFeedback] = useState<null | {
// 		correct: boolean;
// 		explanation: string;
// 	}>(null);
//
// 	const q = assignment.questions[currentQuestion];
//
// 	const checkAnswer = (choiceIndex: number) => {
// 		setSelectedChoice(choiceIndex);
// 		const correct = choiceIndex === q.answer;
// 		setFeedback({ correct, explanation: q.explanation ?? "" });
// 	};
//
// 	const nextQuestion = () => {
// 		if (currentQuestion + 1 < assignment.questions.length) {
// 			setCurrentQuestion(currentQuestion + 1);
// 			setSelectedChoice(null);
// 			setFeedback(null);
// 		} else {
// 			alert("You finished the assignment!");
// 			returnHome();
// 		}
// 	};
//
// 	return (
// 		<div>
// 			<h2 className="text-2xl font-semibold mb-4 text-center">
// 				{assignment.title}
// 			</h2>
// 			<p className="text-lg font-medium mb-2 text-center">
// 				Question {currentQuestion + 1} / {assignment.questions.length}
// 			</p>
// 			<p className="mb-6 text-gray-800 text-center">{q.prompt}</p>
//
// 			<div className="grid gap-3">
// 				{q.choices.map((c, idx) => (
// 					<button
// 						key={idx}
// 						className={`p-3 border rounded-xl text-left transition
// ${selectedChoice === null ? "hover:bg-gray-100" : ""}
// ${selectedChoice === idx && feedback ? (feedback.correct ? "bg-green-200 border-green-600" : "bg-red-200 border-red-600") : ""}`}
// 						onClick={() => selectedChoice === null && checkAnswer(idx)}
// 						disabled={selectedChoice !== null}
// 					>
// 						{c}
// 					</button>
// 				))}
// 			</div>
//
// 			{feedback && (
// 				<div
// 					className={`mt-6 p-4 rounded-xl border text-center shadow ${feedback.correct ? "bg-green-50 border-green-400" : "bg-red-50 border-red-400"}`}
// 				>
// 					<p className="font-semibold mb-2">
// 						{feedback.correct ? "Correct!" : "Incorrect"}
// 					</p>
// 					<p className="text-gray-700">{feedback.explanation}</p>
// 				</div>
// 			)}
//
// 			{selectedChoice !== null && (
// 				<button
// 					onClick={nextQuestion}
// 					className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 mx-auto block"
// 				>
// 					Next
// 				</button>
// 			)}
// 		</div>
// 	);
// }
