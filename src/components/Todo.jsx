import { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegClock } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const { id } = useParams();
  const navigate = useHistory();
  useEffect(() => {
    const url = `https://todo-backend-ten-tau.vercel.app/select-todo/${id}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching todo");
        }
        return res.json();
      })
      .then((todo) => {
        setTodo(todo);
      })
      .catch((error) => {
        console.error("Error fetching todo", error);
      });
  }, [id]);

  const handleDelete = () => {
    const url = `https://todo-backend-ten-tau.vercel.app/delete-todo/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error deleting todo");
        }
        navigate.goBack();
        toast.success("Deleted Successfully");
      })
      .catch((error) => {
        console.error("Error deleting todo", error);
      });
  };

  return (
    <div className="flex items-center justify-center mt-10">
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
          to={`/edit/${todo.todo_id}`}
          className="bg-red-500 p-5 py-3 text-white mt-2 rounded-xl ml-5 hover:bg-red-600"
        >
          Edit
        </NavLink>
      </div>
    </div>
  );
};

export default Todo;
