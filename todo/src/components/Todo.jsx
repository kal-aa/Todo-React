import { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const { id } = useParams();
  const navigate = useHistory();
  const url = "http://localhost:7000/data/" + id;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((todo) => {
        setTodo(todo);
      });
  }, []);

  const handleClick = () => {
    fetch(url, {
      method: "DELETE",
    }).then(() => {
      navigate.push("/");
      toast.success("Deleted Successfully");
    });
  };

  return (
    <div className="m-10 bg-yellow-200 py-20 px-10 rounded-xl">
      <h1 className="text-4xl mb-5 -ml-2 italic capitalize">{todo.title}</h1>
      <p className="text-xl capitalize mb-2">{todo.body}</p>
      <div>
        <p className="inline-block">{todo.date}</p>
        <p className="inline-block ml-5">{todo.time}</p>
      </div>
      <button
        title="Clear this todo"
        onClick={handleClick}
        className="bg-red-500 p-4 py-2 text-white mt-2 rounded-xl"
      >
        Done
      </button>
      <NavLink
        to={`/edit/${todo.id}`}
        className="bg-red-500 p-5 py-3 text-white mt-2 rounded-xl ml-5"
      >
        Edit
      </NavLink>
    </div>
  );
};

export default Todo;
