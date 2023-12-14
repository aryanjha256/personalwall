import { IoMailSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <div className="mt-24 py-24 border-t border-neutral-800">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl text-center  md:text-4xl lg:text-5xl max-w-3xl"
        >
          Have an idea about something.
        </motion.div>
        <div className="py-8 hover:animate-pulse ">
          <a href="mailto:aryanjha256@gmail.com">
            <div className=" bg-neutral-900 border border-neutral-800 text-gray-300 px-12 py-4">
              Get in touch
              <IoMailSharp className="inline-block ml-4 md:text-lg" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
