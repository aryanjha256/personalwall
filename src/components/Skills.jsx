import { useState, useEffect } from "react";
import { useSprings, animated } from "@react-spring/web";

import {
  DiReact,
  DiPython,
  DiNodejs,
  DiAws,
  DiRedhat,
  DiGit,
  DiNginx,
  DiRust,
  DiDjango,
  DiDocker,
  DiFirebase,
  DiJenkins,
} from "react-icons/di";

const skills = [
  <DiReact />,
  <DiPython />,
  <DiNodejs />,
  <DiAws />,
  <DiRedhat />,
  <DiGit />,
  <DiNginx />,
  <DiRust />,
  <DiDjango />,
  <DiDocker />,
  <DiFirebase />,
  <DiJenkins />,
];

const Skills = () => {
  const [skillsToDisplay, setSkillsToDisplay] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth < 640) {
        setSkillsToDisplay(2);
      } else if (viewportWidth < 768) {
        setSkillsToDisplay(3);
      } else {
        setSkillsToDisplay(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [startSkillIndex, setStartSkillIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [skills]);

  // const displayedSkills = [];

  // for (let i = 0; i < skillsToDisplay; i++) {
  //   const skillIndex = (startSkillIndex + i) % skills.length;
  //   displayedSkills.push(skills[skillIndex]);
  // }

  const springs = useSprings(
    skillsToDisplay,
    skills.map((_, i) => ({
      from: { opacity: 0, transform: "translateX(20%)" },
      to: async (next, cancel) => {
        await next({ opacity: 1, transform: "translateX(0)" });
        // await next({ opacity: 0, transform: "translateX(-20%)" });
      },
      reset: true,
      // reverse: i % 2 === 0, // reverse every other emoji
    }))
  );
  return (
    <div className="bg-neutral-900 py-12 border-y border-neutral-800 mt-6">
      <div className="max-w-6xl m-auto px-6">
        <div className="flex items-center justify-around">
          {springs.map((skill, index) => (
            <animated.div
              key={index}
              style={skill}
              className="text-6xl md:text-7xl lg:text-8xl from-neutral-100"
            >
              {skills[(startSkillIndex + index) % skills.length]}
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
