import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import mascotAdblock from "/assets/mascotAdblock.png";

export default function ChatWithChetOverlay({
  onClose,
}: {
  onClose: () => void;
}) {
  const [remainingTime, setRemainingTime] = useState(5);

  useEffect(() => {
    let i = remainingTime;
    let interval = setInterval(() => {
      i--;
      setRemainingTime(i);
      console.log("remainingTime", remainingTime);
      if (i === 0) {
        if (onClose) onClose();
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

        <img
          src={mascotAdblock}
          alt="Chet Gipette"
          className="w-60 mx-auto mb-6 rounded-xl"
        />

        <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">
          Adblocker Detected
        </h2>

        <p className="font-semibold text-gray-800 mb-1">
          Learning has been suspended. Disable your adblocker to continue.
        </p>
      </motion.div>
    </div>
  );
}
