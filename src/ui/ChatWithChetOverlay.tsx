import { motion } from "framer-motion";
import TypingText from "./TypingText";
import { useEffect, useState } from "react";
import mascotThinking from "/assets/mascotThinking.png";

export default function ChatWithChetOverlay({
  onClose,
}: {
  onClose: () => void;
}) {
  const [remainingTime, setRemainingTime] = useState(5);

  const [responseTrigger, setResponseTrigger] = useState(false);

  useEffect(() => {
    let i = remainingTime;
    let interval = setInterval(() => {
      i--;
      setRemainingTime(i);
      console.log("remainingTime", remainingTime);
      if (i === 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-white p-6 rounded-2xl shadow-2xl w-[480px] relative"
      >
        {/* <button */}
        {/*   onClick={onClose} */}
        {/*   className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl" */}
        {/* > */}
        {/*   × */}
        {/* </button> */}

        <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">
          Make sure to try out Chat with Chet!
        </h2>

        <div className="p-4 bg-gray-100 rounded-xl mb-4">
          <p className="font-semibold text-gray-800 mb-1">User:</p>
          <p className="text-gray-700">
            <TypingText
              showChet={false}
              text="I'm feeling lonely"
              onComplete={() =>
                setInterval(() => setResponseTrigger(true), 1000)
              }
            />
          </p>
        </div>

        <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 shadow-inner">
          <div className="flex justify-left items-left">
            <img
              src={mascotThinking}
              alt="Chet Thinking"
              className="w-16 mx-auto rounded-full shadow-lg border-2 border-black"
            />
          </div>
          <p className="font-semibold text-blue-800 mb-1">
            Chet is thinking...
          </p>
          <div className="text-blue-700 font-mono">
            <TypingText
              showChet={false}
              text="Don't worry, I can be your friend!"
              shouldType={responseTrigger}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          {/* Animated progress wheel */}
          {remainingTime > 0 && (
            <>
              <motion.div
                className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                }}
              />
              <div className="text-center absolute translate-y-[11px]">
                {remainingTime}
              </div>
            </>
          )}
          {remainingTime === 0 && (
            <button
              className="py-2 px-4 border rounded-xl shadow-sm hover:shadow-md transition bg-gray-50 flex justify-between items-center"
              onClick={onClose}
            >
              Close
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
