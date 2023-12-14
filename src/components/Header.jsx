import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Header = () => {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/thearyankumar/",
      icon: <FaLinkedin className="text-lg" />,
    },
    {
      name: "Github",
      url: "https://github.com/aryanjha256",
      icon: <FaGithub className="text-lg" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aryan.k.jha/",
      icon: <FaInstagram className="text-lg" />,
    },
  ];

  return (
    <nav className="flex justify-between border-b pb-6 border-neutral-800">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="text-sm"
      >
        <a href="mailto:aryanjha256@gmail.com">
          Say, Hello
          <IoMailSharp className="md:text-lg inline-block ml-4" />
        </a>
      </motion.div>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="flex space-x-8"
      >
        {socials.map((social, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="text-sm text-gray-300 hover:text-neutral-300 hidden md:block">
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                {social.name}
              </a>
            </div>
            <div className="text-sm text-gray-300 hover:text-neutral-300 md:hidden ">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link to Aryan's ${social.name}`}
              >
                {social.icon}
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </nav>
  );
};

export default Header;
