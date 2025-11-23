import { useState } from "react";
import { assignments } from "./data/assignments";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

export default function App() {
	const [page, setPage] = useState<"home" | "quiz">("home");
	const [currentAssignment, setCurrentAssignment] = useState<number | null>(
		null,
	);

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
			<div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-2xl">
				{page === "home" && (
					<Home assignments={assignments} startAssignment={startAssignment} />
				)}
				{page === "quiz" && currentAssignment && (
					<Quiz
						assignment={assignments.find((a) => a.id === currentAssignment)!}
						returnHome={returnHome}
					/>
				)}
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
