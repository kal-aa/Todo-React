import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const { id } = useParams();
  const navigate = useHistory();

  useEffect(() => {
    fetch("http://localhost:7000/data/" + id)
      .then((res) => {
        return res.json();
      })
      .then((todo) => {
        setTodo(todo);
      });
  }, []);

  const handleClick = () => {
    fetch("http://localhost:7000/data/" + id, {
      method: "DELETE",
    }).then(() => {navigate.push('/')});
  };

  return (
    <div className="m-10 bg-yellow-200 py-20 px-10 rounded-xl">
      <h1 className="text-4xl mb-5 -ml-2 italic capitalize">{todo.title}</h1>
      <p className="text-xl capitalize mb-2">{todo.body}</p>
      <p className="inline-block">{todo.date}</p>
      <p className="inline-block ml-5">{todo.time}</p>
      <button
        onClick={handleClick}
        className="block bg-red-500 p-4 py-2 text-white mt-2 rounded-xl"
      >
        Done
      </button>
    </div>
  );
};

export default Todo;
