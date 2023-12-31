import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
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
    <footer className="flex justify-between border-t pt-6 border-neutral-800">
      <div className="text-sm">
        <p className="text-gray-300 md:hidden">Crafted with Love.</p>
        <p className="text-gray-300 hidden md:block">
          Crafted with love, Poppins-interface.
        </p>
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
    </footer>
  );
};

export default Footer;
