import { GiArrowWings } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="flex flex-col items-center pt-20 lg:pt-24">
      <div className="py-8 text-sm text-gray-300">Hi, I'm Aryan 👋</div>
      <div className="text-3xl text-center md:text-4xl lg:text-5xl max-w-3xl">
        Embracing the power of Python, JavaScript, and Rust.
      </div>
      <div className="py-8 hover:animate-pulse ">
        <a
          href="https://blog.devaryan.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" bg-neutral-900 border border-neutral-800 text-gray-300 px-12 py-4">
            Latest Writings
            <GiArrowWings className="inline-block ml-2" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
