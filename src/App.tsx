import { useState } from "react";
import { assignments } from "./data/assignments";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import goldenChet from "/assets/goldenChet.png";
import { usePointsStore } from "./store/usePointsStore";

export default function App() {
	const [page, setPage] = useState<"home" | "quiz">("home");
	const [currentAssignment, setCurrentAssignment] = useState<number | null>(
		null,
	);

	const points = usePointsStore((s) => s.points);

	const startAssignment = (id: number) => {
		setCurrentAssignment(id);
		setPage("quiz");
	};

	const returnHome = () => {
		setPage("home");
		setCurrentAssignment(null);
	};

	return (
		<div className="absolute p-10 w-full h-full flex flex-col items-center bg-green-100">
			<div className="relative bg-white rounded-2xl shadow-xl p-10 w-full max-w-2xl">
				{page === "home" && (
					<Home assignments={assignments} startAssignment={startAssignment} />
				)}
				{page === "quiz" && currentAssignment && (
					<Quiz
						assignment={assignments.find((a) => a.id === currentAssignment)!}
						returnHome={returnHome}
					/>
				)}
				<div className="flex absolute top-3 right-3 rounded-xl border-[#EBDD36] border-[1px] px-1 text-[#EBDD36] p-px">
					<div>{points}</div>
					<img
						src={goldenChet}
						alt="Chet Gipette"
						className="w-4 h-4 rounded-full border-[1.5px] border-[#EBDD36] bg-yellow-100 ml-1 translate-y-[4px]"
					/>
				</div>
			</div>
		</div>
	);
}

// import { useState } from "react";
// import { assignments } from "./data/assignments";
// import Home from "./pages/Home";
// import Quiz from "./pages/Quiz";
//
// export default function App() {
// 	const [page, setPage] = useState<"home" | "quiz">("home");
// 	const [currentAssignment, setCurrentAssignment] = useState<number | null>(
// 		null,
// 	);
//
// 	const startAssignment = (id: number) => {
// 		setCurrentAssignment(id);
// 		setPage("quiz");
// 	};
//
// 	const returnHome = () => {
// 		setPage("home");
// 		setCurrentAssignment(null);
// 	};
//
// 	return (
// 		<div className="absolute p-10 w-full h-full flex flex-col items-center bg-green-100">
// 			<div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-2xl">
// 				{page === "home" && (
// 					<Home assignments={assignments} startAssignment={startAssignment} />
// 				)}
// 				{page === "quiz" && currentAssignment && (
// 					<Quiz
// 						assignment={assignments.find((a) => a.id === currentAssignment)!}
// 						returnHome={returnHome}
// 					/>
// 				)}
// 			</div>
// 		</div>
// 	);
// }
