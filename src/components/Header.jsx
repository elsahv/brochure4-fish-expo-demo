import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between p-4 ">
      <Link to="/" className="font-bold">
        HoveyRoofing
      </Link>
      <div className="flex">
        <Link to="/about" className="px-1">
          about
        </Link>
        <Link to="roof-styles" className="px-1">
          roof styles
        </Link>
      </div>
      <button className="p-2 bg-black text-white">
        <Link to="/contact">Contact Us</Link>
      </button>
    </nav>
  );
};

export default Header;
