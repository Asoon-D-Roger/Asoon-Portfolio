import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Asoon-D-Roger" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/asoonsubbarayan/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/_night_emperor._/?hl=en",
  },
  { icon: <FaTwitter />, path: "https://x.com/Brucewayne1067" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
