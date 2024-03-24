import { FaFacebook,FaInstagram  } from "react-icons/fa6";
import { SiViber } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="border-t border-white py-4 mt-10">
      <div className=" container mx-auto flex items-center justify-between">
        <div className="flex gap-4 ">
          <FaFacebook size={24} />
          <FaInstagram size={24} />
          <SiViber size={24} />
          <FiPhoneCall size={24} />
        </div>

        <div className="">
          <h6>Designed by Ink Studio. @2024 All rights reserved</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
