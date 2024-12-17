import { NavLink } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import PropTypes from "prop-types";

const Todo = ({ todo, handleDelete }) => {
  return (
    <div className="flex items-center justify-center mt-[10%] md:mt-[5%]">
      <div className="bg-yellow-200 py-20 px-10 rounded-xl w-full mx-[10%] md:mx-[30%]">
        <h1 className="text-4xl mb-5 -ml-2 italic capitalize">{todo.title}</h1>
        <p className="text-xl capitalize mb-2">{todo.body}</p>
        <div>
          <p className="inline-block">{todo.date}</p>
          <p className="inline-block ml-5">
            {todo.time} <FaRegClock className="inline mb-1" />
          </p>
        </div>
        <button
          title="Clear this todo"
          onClick={handleDelete}
          className="bg-red-500 p-4 py-2 text-white mt-2 rounded-xl hover:bg-red-600"
        >
          Done
          <FaCheck className="inline ml-1" />
        </button>
        <NavLink
          to={`/todos/${todo.email_id}/edit/${todo.todo_id}`}
          className="bg-red-500 p-5 py-3 text-white mt-2 rounded-xl ml-5 hover:bg-red-600"
        >
          Edit
        </NavLink>
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.array.isRequired,
  handleDelete: PropTypes.func,
};

export default Todo;
