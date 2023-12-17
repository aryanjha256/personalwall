import { useEffect } from "react";
import { GiArrowWings } from "react-icons/gi";

const Hero = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
    document.querySelector("span").onmouseover = (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 20);
    };
  }, []);
  return (
    <div className="flex flex-col items-center pt-20 lg:pt-24">
      <div className="py-8 text-sm text-gray-300">
        <span className="font-hero" data-value="HI, I'M ARYAN">
          HI, I'M ARYAN
        </span>
      </div>
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
