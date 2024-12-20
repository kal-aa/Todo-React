import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-red-500 text-white h-24 transition-all duration-100 mt-5">
      <NavLink to="/contact-us" className="hover:text-blue-200">
        Contact ME!
      </NavLink>
    </footer>
  );
};

export default Footer;
