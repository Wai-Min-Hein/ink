import { FaFacebook, FaInstagram,FaTelegram  } from "react-icons/fa6";
import { SiViber } from "react-icons/si";

import logo from "/images/golden-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-10 w-screen container mx-auto">
      <div className="flex justify-center">
        <img src={logo} className="w-1/6 h-auto object-cover" alt="" />
      </div>

      <ul className="flex items-center justify-center gap-12 flex-1 mx-auto text-lg font-[500] my-6">
        <Link to={"/"}>
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link to={"/team"}>
          <li className="cursor-pointer">Team</li>
        </Link>
        <Link to={"/about"}>
          <li className="cursor-pointer">About Us</li>
        </Link>

        <Link to={"/services"}>
          <li className="cursor-pointer">Services</li>
        </Link>

        <Link to={"/blogs"}>
          <li className="cursor-pointer">Blogs</li>
        </Link>

        <Link to={"/contact"}>
          <li className="cursor-pointer">Contact</li>
        </Link>
      </ul>

      <div className="mb-6">
        <p className="w-1/2 mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          molestiae ea eaque perferendis earum, harum ipsam, laborum.
        </p>
      </div>

        <div className="flex gap-4 justify-center mb-6">
          <FaFacebook size={24} />
          <FaInstagram size={24} />
          <SiViber size={24} />
          <FaTelegram size={24} />
        </div>


      <div className=" container mx-auto flex items-center justify-between border-t border-white py-8">

        <div className="text-center w-full">
          <h6>Designed by Ink Studio. @2024 All rights reserved</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
