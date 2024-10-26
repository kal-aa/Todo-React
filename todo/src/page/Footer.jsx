import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-red-500 py-5 text-white text-center block sm:-mx-96 transition-all duration-100">
      <Link to="/contact-us" className="hover:text-blue-200">
        Contact ME!!
      </Link>
    </div>
  );
};

export default Footer;
