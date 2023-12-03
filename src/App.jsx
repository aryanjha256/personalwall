import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-200">
      <div className="max-w-6xl mx-auto px-8 py-6">
        <Header />
        <Hero />
      </div>
      {/* <Skills /> */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        <WhatIDo />
      </div>
    </div>
  );
};

export default App;
