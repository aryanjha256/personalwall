const Header = () => {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/thearyankumar/",
    },
    {
      name: "Github",
      url: "https://github.com/aryanjha256",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aryan.k.jha/",
    },
  ];

  return (
    <nav className="flex justify-between border-b pb-6 border-neutral-800">
      <div className="text-sm">Say, Hello</div>
      <div className="flex space-x-8">
        {socials.map((social, index) => (
          <div key={index}>
            <div className="text-sm text-gray-300 hover:text-neutral-300">
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                {social.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Header;
