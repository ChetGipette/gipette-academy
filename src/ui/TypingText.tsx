import { useEffect, useState } from "react";
import mascotNeutral from "/assets/cursorHead.png";

type Props = {
  text: string;
  speed?: number; // ms per character
  onComplete?: () => void;
  shouldType?: boolean;
};

export default function TypingText({
  text,
  speed = 50,
  onComplete,
  shouldType = true,
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [undisplayed, setUndisplayed] = useState(text);

  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (shouldType && !triggered) {
      setTriggered(true);
      setDisplayed("");
      setUndisplayed(text);
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i));
        setUndisplayed(text.slice(i));
        i++;
        if (i > text.length) {
          if (onComplete) onComplete();
          clearInterval(interval);
        }
      }, speed);
      return () => {
        clearInterval(interval);
      };
    }
  }, [text, speed, shouldType]);

  return (
    <span className="mb-6 text-gray-800">
      {/* <motion.div */}
      {/*   className="mb-6 text-gray-800 text-center whitespace-pre-wrap" */}
      {/*   initial={{ opacity: 0 }} */}
      {/*   animate={{ opacity: 1 }} */}
      {/* > */}
      {/*   {displayed} */}
      {/* </motion.div> */}
      {displayed}
      {undisplayed.length > 0 && (
        <span className="fixed transform translate-y-[2px] animate-blink">
          <img
            src={mascotNeutral}
            alt="Chet Neutral"
            className={`h-6 rounded-lg ${!triggered ? "opacity-0" : ""}`}
          />
        </span>
      )}
      <span className="opacity-0">{undisplayed}</span>
    </span>
  );
}
