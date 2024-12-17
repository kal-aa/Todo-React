import { NavLink, useLocation } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { useState } from "react";
import { FaTasks } from "react-icons/fa";

const Header = () => {
  const [isElipActive, setIsElipActive] = useState(true);
  const location = useLocation().pathname;
  const param = location.split("/");
  const email_id = param[2];
  const active = (isActive) =>
    isActive ? "font-bold text-red-500" : "font-bold hover:text-red-500";

  return (
    <header className="flex justify-around py-5 px-5 bg-slate-200">
      {/* Left part */}
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500">
        <NavLink to="/">
          <FaTasks className="inline mr-2 text-2xl text-red-800 mb-1" />
        </NavLink>
        Todo
      </div>

      <div className="flex items-center">
        <nav className={isElipActive ? "space-x-4" : "hidden sm:block"}>
          <NavLink exact to={`/todos/${email_id}`} className={active}>
            Todos
          </NavLink>
          <NavLink to={`/add-todo/${email_id}`} className={active}>
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

export default Header;
