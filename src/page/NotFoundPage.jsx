import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center">
      <FaExclamationTriangle className="w-[20%] h-[10%] text-yellow-600" />
      <h1 className="text-2xl text-red-700">Page not found</h1>
      <div className="text-xl text-blue-700 underline hover:text-blue-900">
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
