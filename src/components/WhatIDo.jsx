const WhatIDo = () => {
  const whatIDo = [
    {
      what: "Web Development",
      ido: "Crafting web interfaces that are not only responsive, accessible, and intuitive but also visually appealing and user-friendly.",
    },
    {
      what: "System Tools",
      ido: "Developing system tools that go beyond being just fast and reliable, ensuring they are also highly efficient and seamlessly integrate into diverse environments, making them easy to use.",
    },
    {
      what: "DevOps",
      ido: "Establishing DevOps practices that are not only automated, scalable, and reliable but also prioritize continuous improvement, collaboration, and security in the software development lifecycle.",
    },
    {
      what: "Machine Learning",
      ido: "Designing and implementing machine learning models that are not just accurate and scalable but also adaptable to evolving data and business needs.",
    },
  ];

  return (
    <div>
      <div className="text-2xl md:text-3xl flex justify-center max-w-3xl text-center m-auto py-12">
        Enjoys doing a variety of things with enthusiasm and zest
      </div>
      <div className="grid gap-2 lg:gap-4 grid-cols-2 lg:grid-cols-4">
        {whatIDo.map((item, index) => (
          <div key={index} className="hover:animate-pulse">
            <div className="bg-neutral-900 border border-neutral-800 px-6 pt-48 pb-8 min-h-full">
              <div className="text-lg">{item.what}</div>
              <div className="text-sm text-gray-300 pt-6">{item.ido}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
