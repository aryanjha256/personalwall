const WhatIDo = () => {
  const whatIDo = [
    {
      what: "Web Dev",
      ido: "Crafting web interfaces that are not only responsive, accessible, and intuitive but also visually appealing and user-friendly.",
    },
    {
      what: "System Dev",
      ido: "Developing system tools that go beyond being just fast and reliable, ensuring they are also highly efficient and seamless.",
    },
    {
      what: "DevOps",
      ido: "Establishing DevOps practices that are not only automated, scalable, and reliable but also prioritizes security.",
    },
    {
      what: "ML & AI",
      ido: "Designing and implementing machine learning models that are not just accurate and scalable but also adaptable.",
    },
  ];

  return (
    <div>
      <div className="text-2xl md:text-3xl flex justify-center max-w-3xl text-center m-auto py-12">
        Enjoys doing a variety of things with enthusiasm and zest.
      </div>
      <div className="grid gap-2 lg:gap-4 grid-cols-2 lg:grid-cols-4">
        {whatIDo.map((item, index) => (
          <div key={index} className="hover:animate-pulse">
            <div className="bg-neutral-900 border border-neutral-800 px-6 pt-48 pb-8 min-h-full">
              <div className="text-lg  break-words">{item.what}</div>
              <div className="text-xs md:text-sm font-light text-gray-300 pt-6">
                {item.ido}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
