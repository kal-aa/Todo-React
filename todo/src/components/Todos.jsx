import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:7000/data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && (
        <ClipLoader
          color="#123abc"
          loading={loading}
          size={200}
          cssOverride={{ margin: "100px auto", display: 'block' }}
        />
      )}
      {!loading && (
        <div className="text-center sm:flex sm:items-center sm:space-x-10">
          <h1 className="text-4xl font-medium">{todos.length === 0 ? <Link to="/add-todo" className="text-blue-700 underline">Click here To add</Link> : 'Your Todos'}</h1>
          <ol className="m-10">
            {todos.map((todo) => (
              <li key={todo.id}>
                <Link
                  to={`/todo/` + todo.id}
                  className="px-5 flex items-center space-x-40 hover:shadow-2xl"
                >
                  <h2 className="text-2xl text-red-500 w-40">{todo.title}</h2>
                  <p className="font-bold text-red-700">{todo.date}</p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
};

export default Todos;
