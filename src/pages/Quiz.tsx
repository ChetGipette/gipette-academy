import { useEffect, useState } from "react";
import { type Assignment } from "../types";
import { motion, AnimatePresence } from "framer-motion";
import mascotNeutral from "/assets/mascotNeutral.png";
import mascotCorrect from "/assets/mascotCorrect.png";
import mascotIncorrect from "/assets/mascotIncorrect.png";
import mascotConcerned from "/assets/mascotConcerned.png";
import TypingText from "../ui/TypingText";
import TypingTextFakeout from "../ui/TypingTextFakeout";
import ChetModelOverlay from "../ui/ChetModelOverlay";
import { usePointsStore } from "../store/usePointsStore";

type Props = {
	assignment: Assignment;
	returnHome: () => void;
};

export default function Quiz({ assignment, returnHome }: Props) {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [adjQuestion, setAdjQuestion] = useState(0);
	const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
	const [feedback, setFeedback] = useState<null | {
		correct: boolean;
		explanation: string;
	}>(null);
	const [questionReady, setQuestionReady] = useState(false);
	const [censored, setCensored] = useState(false);

	const q = assignment.questions[currentQuestion];

	const addPoints = usePointsStore((s) => s.addPoints);
	const pointsPerQuestion = usePointsStore((s) => s.pointsPerQuestion);
	const setPointsPerQuestion = usePointsStore((s) => s.setPointsPerQuestion);

	const checkAnswer = (choiceIndex: number) => {
		setSelectedChoice(choiceIndex);
		const correct = choiceIndex === q.answer;
		setFeedback({ correct, explanation: q.explanation ?? "" });
		if (correct) addPoints(pointsPerQuestion);
	};

	const nextQuestion = () => {
		console.log("nextQuestion", currentQuestion);
		setQuestionReady(false);
		setCensored(false);
		if (q.type === "models") {
			setPointsPerQuestion(5);
		}
		if (currentQuestion + 1 < assignment.questions.length) {
			setCurrentQuestion(currentQuestion + 1);
			if (!q.type) {
				setAdjQuestion(adjQuestion + 1);
			}
			setSelectedChoice(null);
			setFeedback(null);
		} else {
			alert("You finished the assignment!");
			returnHome();
		}
	};

	useEffect(() => {
		console.log("fakeout", q);
	}, [q]);

	return (
		<>
			{q.type === "models" && <ChetModelOverlay onClose={nextQuestion} />}
			<motion.div
				key={adjQuestion}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="flex justify-center mb-6 justify-between">
					<div className="flex mb-6 ml-10 w-1/3 justify-center">
						<img
							hidden={feedback !== null || censored}
							src={mascotNeutral}
							alt="Chet Neutral"
							className="h-32 rounded-lg"
						/>
						<img
							hidden={!feedback || !feedback.correct}
							src={mascotCorrect}
							alt="Chet Happy"
							className="h-32 rounded-lg"
						/>
						<img
							hidden={!feedback || feedback.correct}
							src={mascotIncorrect}
							alt="Chet Sad"
							className="h-32 rounded-lg"
						/>
						<img
							hidden={feedback !== null || !censored}
							src={mascotConcerned}
							alt="Chet Concerned"
							className="h-32 rounded-lg"
						/>
					</div>
					<div className="flex flex-col justify-center w-full">
						<h2 className="text-2xl font-semibold mb-4 text-center">
							{assignment.title}
						</h2>
						<p className="text-lg font-medium mb-2 text-center">
							Question {adjQuestion + 1}
						</p>
						<div className="text-center">
							{q.type === "fakeout" ? (
								<TypingTextFakeout
									key={currentQuestion}
									text={q.prompt}
									onComplete={nextQuestion}
									onCensor={() => setCensored(true)}
								/>
							) : (
								!q.type && (
									<TypingText
										speed={35}
										key={currentQuestion}
										text={q.prompt}
										onComplete={() => setQuestionReady(true)}
									/>
								)
							)}
						</div>
						{/* <p className="mb-6 text-gray-800 text-center">{q.prompt}</p> */}
					</div>
				</div>

				<div className="grid gap-3">
					{q.choices.map((c, idx) => (
						<motion.button
							key={4 * currentQuestion + idx}
							whileHover={{ scale: selectedChoice === null ? 1.02 : 1 }}
							whileTap={{ scale: selectedChoice === null ? 0.98 : 1 }}
							className={`p-3 border rounded-xl text-left transition 
              ${selectedChoice === null ? "hover:bg-gray-100" : ""}
              ${selectedChoice === idx && feedback ? (feedback.correct ? "bg-green-200 border-green-600" : "bg-red-200 border-red-600") : ""}`}
							onClick={() => selectedChoice === null && checkAnswer(idx)}
							disabled={selectedChoice !== null || !questionReady}
						>
							{"abcdefghijklmnopqrstuvwxyz"[idx]}){" "}
							{!q.type && (
								<TypingText speed={35} text={c} shouldType={questionReady} />
							)}
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
							<p className="text-gray-700">
								<span className="text-black font-semibold">
									{!feedback.correct &&
										`The correct answer was (${"abcd"[q.answer]}): `}
								</span>
								{feedback.explanation}
							</p>
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
		</>
	);
}
