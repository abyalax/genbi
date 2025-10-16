import { useState, useEffect } from 'react';

interface TypingProps {
  text: string[];
  speed?: number;
  delay?: number;
  className?: string;
}

const TypingAnimation = ({ text, speed = 100, delay = 2000, className }: TypingProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = text[textIndex];
    if (isDeleting) {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, speed / 2); 
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % text.length);
      }
    } else {
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const deleteTimeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
        return () => clearTimeout(deleteTimeout);
      }
    }
  }, [charIndex, textIndex, isDeleting, text, speed, delay]);
  return displayedText ? <span className={className}>{displayedText}</span> : <span>|</span>
};

export default TypingAnimation;
