import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const Header = () => {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/thearyankumar/",
      icon: <FaLinkedin />,
    },
    {
      name: "Github",
      url: "https://github.com/aryanjha256",
      icon: <FaGithub />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aryan.k.jha/",
      icon: <FaInstagram />,
    },
  ];

  return (
    <nav className="flex justify-between border-b pb-6 border-neutral-800">
      <div className="text-sm">
        <a href="mailto:aryanjha256@gmail.com">
          Say, Hello
          <IoMailSharp className="inline-block ml-4" />
        </a>
      </div>
      <div className="flex space-x-8">
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
      </div>
    </nav>
  );
};

export default Header;
