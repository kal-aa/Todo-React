import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-red-500 p-5 text-white text-center">
      <Link to="/contact-us" className="hover:text-blue-200">
        Contact ME!!
      </Link>
    </div>
  );
};

export default Footer;
