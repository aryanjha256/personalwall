import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Glow from "./components/Glow";

const App = () => {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-200">
      {/* <Glow /> */}
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
