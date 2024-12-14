import { NavLink } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { useState } from "react";
import { FaTasks } from "react-icons/fa";

const NavBar = () => {
  const [isElipActive, setIsElipActive] = useState(true);
  const active = (isActive) =>
    isActive ? "font-bold text-red-500" : "font-bold hover:text-red-500";

  return (
    <header className="flex justify-around py-5 px-5 bg-slate-200">
      {/* Left part */}
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500">
        <FaTasks className="inline mr-2 text-2xl text-red-800 mb-1" />
        Todo
      </div>

      <div className="flex items-center">
        <nav className={isElipActive ? "space-x-4" : "hidden sm:block"}>
          <NavLink exact to="/" className={active}>
            Home
          </NavLink>
          <NavLink to="/add-todo" className={active}>
            Add-Todo
          </NavLink>
        </nav>

        <FaEllipsisV
          onClick={() => {
            setIsElipActive((prev) => !prev);
          }}
          className={
            isElipActive ? "sm:hidden ml-1" : "sm:hidden animate-pulse"
          }
        />
      </div>
    </header>
  );
};

export default NavBar;
