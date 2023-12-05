import React from "react";

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
  return (
    <div className="bg-neutral-900 py-12 border-y border-neutral-800 mt-6">
      <div className=" overflow-hidden whitespace-nowrap">
        <div className=" inline-block animate-scroll">
          {skills.map((skill, index) => (
            <div key={index} className="inline-block mx-8 md:mx-10 lg:mx-12">
              {React.cloneElement(skill, {
                className: "text-6xl text-neutral-100",
              })}
            </div>
          ))}
        </div>
        <div className=" inline-block animate-scroll">
          {skills.map((skill, index) => (
            <div key={index} className="inline-block mx-8 md:mx-10 lg:mx-12">
              {React.cloneElement(skill, {
                className: "text-6xl text-neutral-100",
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
