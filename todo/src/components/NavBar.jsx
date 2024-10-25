import { NavLink } from "react-router-dom";

const NavBar = () => {
  const active = (isActive) =>
    isActive ? "bg-black text-white px-4 py-2 rounded-lg" : "";

  return (
    <div className="flex justify-between py-5 px-5 bg-slate-200">
      <div className="text-xl font-bold text-red-500">Todo</div>
      <div className="space-x-4 navigate">
        <NavLink exact to="/" className={active}>
          Home
        </NavLink>
        <NavLink to="/add-todo" className={active}>Add-Todo</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
