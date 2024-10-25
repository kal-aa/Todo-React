import { FaPhone, FaGoogle } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <div className="space-y-10 my-28">
        <div className="flex space-x-4 justify-center md:flex-col md:items-center lg:flex-row-reverse xl:flex-col-reverse">
          <FaPhone className="text-yellow-600 text-4xl sm:text-5xl lg:ml-10" />
          <p className="text-2xl sm:text-3xl text-blue-500 hover:text-blue-700">
            +251 968350 741
          </p>
        </div>
        <div className="flex space-x-4 justify-center md:flex-col md:items-center lg:flex-row-reverse xl:flex-col-reverse">
          <FaGoogle className="text-yellow-600 text-4xl sm:text-5xl lg:ml-10" />
          <a
            href="https://sadkalshayee@gmail.com"
            target="_blank"
            className="text-2xl sm:text-3xl text-blue-500 hover:text-blue-700"
          >
            sadkalshayee@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
