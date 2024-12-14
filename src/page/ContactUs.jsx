import { FaPhone, FaGoogle } from "react-icons/fa";

const ContactUs = () => {
  const layoutStyle =
    "flex space-x-4 justify-center items-center md:flex-col md:items-center lg:flex-row-reverse xl:flex-col-reverse";
  const faStyle = "text-2xl lg:ml-2";
  const infoStyle = "text-2xl hover:text-slate-700";

  return (
    <>
      <div className="space-y-10 my-28">
        <div className={layoutStyle}>
          <FaPhone className={`${faStyle} text-yellow-600`} />
          <a href="tel: +2519 68350741" className={infoStyle}>
            +251 968350 741
          </a>
        </div>
        <div className={layoutStyle}>
          <FaGoogle className={`${faStyle} text-blue-600`} />
          <a
            href="mailto: sadkalshayee@gmail.com"
            className={infoStyle}
          >
            sadkalshayee@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
