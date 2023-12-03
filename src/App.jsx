import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";

const App = () => {
  const reuiredDots = document.body.clientWidth / 10;

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < reuiredDots; i++) {
      dots.push(
        <div
          key={i}
          className="relative bg-neutral-200 p-[1px] opacity-40 rounded-full inline-block"
        />
      );
    }
    return dots;
  };

  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-200">
      <div className="absolute">
        {renderDots()}
        {/* <div className="relative bg-neutral-400 p-[2px] opacity-40 rounded-full inline-block" /> */}
      </div>
      <div className="max-w-6xl mx-auto px-3 md:px-6 lg:px-8 py-6">
        <Header />
        <Hero />
      </div>
      <Skills />
      <div className="max-w-6xl mx-auto px-3 md:px-6 lg:px-8 py-6">
        <WhatIDo />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
};

export default App;
