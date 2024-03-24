import logo from "/images/logo.png";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto">
      <div className="">
        <img src={logo} alt="" className="w-40  object-cover" />
      </div>
      <ul className="flex items-center justify-center gap-12 flex-1 mx-auto">
        <li>Home</li>
        <li>Artists</li>
        <li>Services</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
      <div className="">
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
