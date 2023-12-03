import { skills } from "../data/skills";

const Skills = () => {
  return (
    <div className="bg-neutral-900 py-12 border-y border-neutral-800 mt-6">
      <div className="flex items-center justify-evenly overflow-clip whitespace-nowrap">
        {skills.map((skill, index) => (
          <div key={index} className="inline-block mx-8 md:mx-10 lg:mx-12">
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
