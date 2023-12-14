import React, { useState, useEffect } from "react";
import { useSprings, animated } from "@react-spring/web";

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

  const springs = useSprings(
    emojisToDisplay,
    emojis.map((_, i) => ({
      from: { opacity: 0, transform: "translateX(100%)" },
      to: async (next, cancel) => {
        await next({ opacity: 1, transform: "translateX(0)" });
        await next({ opacity: 0, transform: "translateX(-100%)" });
      },
      reset: true,
      reverse: i % 2 === 0, // reverse every other emoji
    }))
  );

  return (
    <div className="flex items-center justify-around">
      {springs.map((style, index) => (
        <animated.span key={index} style={style} className="text-4xl">
          {emojis[(startEmojiIndex + index) % emojis.length]}
        </animated.span>
      ))}
    </div>
  );
};

export default Emojis;
