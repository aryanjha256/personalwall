import { DiReact, DiPython, DiNodejs, DiAws } from "react-icons/di";

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: <DiReact className="text-6xl text-neutral-100" />,
    },
    {
      name: "Python",
      icon: <DiPython className="text-6xl text-neutral-100" />,
    },
    {
      name: "Node.js",
      icon: <DiNodejs className="text-6xl text-neutral-100" />,
    },
    {
      name: "AWS",
      icon: <DiAws className="text-6xl text-neutral-100" />,
    },
  ];
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
