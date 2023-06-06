import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="z-50 flex justify-between p-4 relative top-0 w-full text-white _textShadow text-lg">
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
      <button className="p-2 text-white bg-black">
        <Link to="/contact">Contact Us</Link>
      </button>
    </nav>
  );
};

export default Header;
