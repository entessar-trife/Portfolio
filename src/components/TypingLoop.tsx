import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingLoopProps {
  phrases: string[];
  speed?: number;
  pause?: number;
}

const TypingLoop = ({
  phrases,
  speed = 150,
  pause = 1000,
}: TypingLoopProps) => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(
      () => setShowCursor((prev) => !prev),
      500
    );
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    let timeout: number;

    if (!isDeleting && displayed.length < phrase.length) {
      timeout = setTimeout(
        () => setDisplayed(phrase.substring(0, displayed.length + 1)),
        speed
      );
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(phrase.substring(0, displayed.length - 1)),
        speed / 2
      );
    } else if (!isDeleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentPhrase((currentPhrase + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentPhrase, phrases, speed, pause]);

  return (
    <motion.span
      className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-pacifico"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8}}
    >
      {displayed}
      {showCursor && "|"}
    </motion.span>
  );
};

export default TypingLoop;
