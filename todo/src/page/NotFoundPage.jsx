import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <FaExclamationTriangle
        style={{
          width: "50%",
          height: "30%",
          margin: "0 auto",
          color: "yellowgreen",
        }}
      />
      <h1 className="text-3xl text-center text-red-700">Page not found</h1>
      <div className="text-center text-xl text-blue-700 underline hover:text-blue-900">
        <Link to="/">Go Home</Link>
      </div>
    </>
  );
};

export default NotFoundPage;
