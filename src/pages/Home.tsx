import { type Assignment } from "../types";
import { motion } from "framer-motion";
import mascotHome from "/assets/mascotHome.png";

type Props = {
	assignments: Assignment[];
	startAssignment: (id: number) => void;
};

export default function Home({ assignments, startAssignment }: Props) {
	return (
		<div>
			<h1 className="text-4xl font-bold text-blue-700 text-center">
				Gipette Academy
			</h1>
			<div className="text-[12px] mb-6 text-blue-700 text-center">
				<em>Expanding access to education since 2031</em>
			</div>
			<img
				src={mascotHome}
				alt="Chet Gipette Home"
				className="w-40 mx-auto mb-6 rounded-xl"
			/>
			<h2 className="text-2xl mb-6 font-semibold text-center">Assignments</h2>
			<div className="grid gap-4">
				{assignments.map((a) => (
					<motion.button
						key={a.id}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="p-4 border rounded-xl shadow hover:bg-blue-50 transition text-left"
						onClick={() => startAssignment(a.id)}
					>
						<h3 className="text-xl font-semibold">{a.title}</h3>
						<p className="text-gray-600">{a.questions.length} question(s)</p>
					</motion.button>
				))}
			</div>
		</div>
	);
}
