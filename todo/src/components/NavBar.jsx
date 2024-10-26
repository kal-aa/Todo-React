import { NavLink } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { useState } from "react";
import { FaTasks } from "react-icons/fa";

const NavBar = () => {
  const [isactive, setIsActive] = useState(false);
  const [isElipActive, setIsElipActive] = useState(false);
  const active = (isActive) => (isActive ? "bg-red-200 p-2 rounded-lg text-xl" : "text-xl hover:text-red-600");

  return (
    <div className="flex justify-between md:justify-evenly py-5 px-5 bg-slate-200">
      <div className="text-3xl sm:text-4xl lg:text-5xl xl:texxt-6xl font-bold text-red-500">
        <FaTasks className="inline mr-2 text-2xl text-red-800 mb-1" />
        Todo
      </div>

      <div className="flex items-center">
        <div className={isactive ? "space-x-4" : "space-x-4 hidden sm:block"}>
          <NavLink exact to="/" className={active}>
            Home
          </NavLink>
          <NavLink to="/add-todo" className={active}>
            Add-Todo
          </NavLink>
        </div>

        <FaEllipsisV
          onClick={() => {
            setIsActive((prev) => !prev);
            setIsElipActive((prev) => !prev);
          }}
          className={
            isElipActive ? "sm:hidden ml-3" : "sm:hidden animate-pulse"
          }
        />
      </div>
    </div>
  );
};

export default NavBar;
