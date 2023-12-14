import React, { useState, useEffect } from "react";

const Emojis = () => {
  const emojis = [
    "🔥",
    "👨‍💻",
    "🤣",
    "🙌",
    "🎉",
    "🎶",
    "👀",
    "🎁",
    "🍓",
    "👨‍🚀",
    "🍔",
    "🛺",
  ];
  const [emojisToDisplay, setEmojisToDisplay] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth < 600) {
        setEmojisToDisplay(2);
      } else if (viewportWidth < 900) {
        setEmojisToDisplay(3);
      } else if (viewportWidth < 1200) {
        setEmojisToDisplay(4);
      } else {
        setEmojisToDisplay(5);
      }
    };

    // Initial setup
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [startEmojiIndex, setStartEmojiIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
    }, 1000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [emojis]);

  const displayedEmojis = [];

  for (let i = 0; i < emojisToDisplay; i++) {
    const emojiIndex = (startEmojiIndex + i) % emojis.length;
    displayedEmojis.push(emojis[emojiIndex]);
  }

  return (
    <div className="flex items-center justify-around">
      {displayedEmojis.map((emoji, index) => (
        <span key={index} className="text-4xl">
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default Emojis;
