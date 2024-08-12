import React, { useEffect, useState } from 'react';

const TypingText = ({ texts, typingSpeed = 50, pauseTime = 3000 }) => {
  const [currentText, setCurrentText] = useState(''); // State to keep track of the current text being typed
  const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of the current index in the texts array
  const [typing, setTyping] = useState(true); // State to determine if the text is currently being typed or deleted
  const [isPaused, setIsPaused] = useState(false); // State to handle the pause after typing or deleting

  useEffect(() => {
    let timeout; // Timeout variable to manage the typing/deleting interval

    if (isPaused) {
      // If paused, set a timeout to unpause
      timeout = setTimeout(() => {
        setIsPaused(false);
      }, pauseTime);
    } else if (typing) {
      // Handle typing logic
      if (currentText.length < texts[currentIndex].length) {
        // If there are more characters to type, add the next character
        timeout = setTimeout(() => {
          setCurrentText(texts[currentIndex].substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // If the text is fully typed, pause before starting to delete
        setTyping(false);
        setIsPaused(true);
      }
    } else {
      // Handle deleting logic
      if (currentText.length > 0) {
        // If there are characters to delete, remove the last character
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, typingSpeed);
      } else {
        // If the text is fully deleted, move to the next text and pause before starting to type
        setTyping(true);
        setCurrentIndex((currentIndex + 1) % texts.length);
        setIsPaused(false);
      }
    }

    // Clear the timeout when the component is unmounted or when dependencies change
    return () => clearTimeout(timeout);
  }, [currentText, typing, isPaused, currentIndex, texts, typingSpeed, pauseTime]);

  return <span>{currentText}</span>; // Render the current text
};

export default TypingText;
