import { useState } from "react";

import { skills } from "../data/skills";

const Skills = () => {
  return (
    <div className="bg-neutral-900 py-12 border-y border-neutral-800 mt-6">
      <div className="flex items-center justify-evenly overflow-auto">
        {skills.map((skill, index) => (
          <div key={index}>{skill.icon}</div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
