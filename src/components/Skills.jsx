import { useState, useEffect } from "react";

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
  const [startIndex, setStartIndex] = useState(0);
  const [visibleIcons, setVisibleIcons] = useState(
    skills.slice(startIndex, startIndex + 4)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 4) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setVisibleIcons(skills.slice(startIndex, startIndex + 4));
  }, [startIndex]);

  return (
    <div className="bg-neutral-900 py-12 border-y border-neutral-800 mt-6">
      <div className="max-w-5xl m-auto px-6">
        <div className="flex justify-between items-center">
          {visibleIcons.map((skill, index) => (
            <div
              key={index}
              className="text-6xl md:text-7xl lg:text-8xl from-neutral-100 transition-all"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
