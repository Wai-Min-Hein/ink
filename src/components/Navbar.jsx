import { Link } from "react-router-dom";
// import logo from "/images/white-logo.png";
import logo from "/images/golden-logo.png";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto py-2">
      <div className="flex items-center justify-start gap-3">
        <img src={logo} alt="" className="h-14  object-cover" />
        {/* <div className="">
          <h6>Ink Tattoo Stuido</h6>
        </div> */}
      </div>
      <ul className="flex items-center justify-center gap-12 flex-1 mx-auto text-[1.2] font-semibold leading-3 tracking-wider">
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
      <div className="">
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
