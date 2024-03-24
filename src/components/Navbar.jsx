import { Link } from "react-router-dom";
import logo from "/images/logo.png";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto">
      <div className="">
        <img src={logo} alt="" className="w-40  object-cover" />
      </div>
      <ul className="flex items-center justify-center gap-12 flex-1 mx-auto">
        <Link to={"/"}>
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link to={"/artists"}>
          <li className="cursor-pointer">Artists</li>
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
      <div className="">
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
