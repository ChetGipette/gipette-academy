import { type Assignment } from "../types";
import { motion } from "framer-motion";
import mascotHome from "/assets/mascotCorrect.png";
import goldenChet from "/assets/goldenChet.png";

type Props = {
  correct: string;
  coinGain: number;
  returnHome: () => void;
};

export default function Completed({ correct, coinGain, returnHome }: Props) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-700 text-center pb-6">
        Assignment Completed!
      </h1>
      <img
        src={mascotHome}
        alt="Chet Gipette Home"
        className="w-40 mx-auto mb-6 rounded-xl"
      />

      <h2 className="text-2xl mb-6 font-semibold text-center">
        You answered {correct} correctly!
      </h2>

      <h2 className="text-2xl mb-6 font-semibold text-center flex items-center justify-center">
        You earned
        <span className="text-[#EBDD36] flex mx-1">
          {coinGain > 0 && "+"}
          {coinGain}
          <img
            src={goldenChet}
            alt="Chet Gipette"
            className="w-5 h-5 rounded-full border-[1.5px] border-[#EBDD36] bg-yellow-100 ml-1 translate-y-[6px]"
          />
        </span>
        !
      </h2>

      <motion.button
        onClick={returnHome}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 mx-auto block"
      >
        Return Home
      </motion.button>
      {/* <h2 className="text-2xl mb-6 font-semibold text-center">Assignments</h2> */}
    </div>
  );
}
