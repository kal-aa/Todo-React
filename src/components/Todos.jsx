import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { FaHandPointRight } from "react-icons/fa";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:7000/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching Json data");
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching todos", error);
      });
  }, []);

  return (
    <>
      {isLoading && (
        <ClipLoader
          color="#123abc"
          isloading={isLoading.toString()}
          size={200}
          cssOverride={{ margin: "100px auto", display: "block" }}
        />
      )}
      {!isLoading && (
        <main className="text-center mx-10  mt-10 sm:flex sm:justify-center sm:items-center">
          {todos.length > 0 ? (
            <h1 className="text-3xl mb-5 sm:mb-0 sm:mr-[5%]">Your Todos</h1>
          ) : (
            <NavLink
              to="/add-todo"
              className="text-blue-700 text-2xl hover:text-blue-800"
            >
              No todos: <span className="underline">Click here To add</span>
            </NavLink>
          )}
          <ul className="list-disc space-y-2 flex flex-col justify-center">
            {todos.map((todo) => (
              <li key={todo.id}>
                <NavLink
                  to={`/todo/${todo.id}`}
                  className="flex items-center justify-center space-x-40 hover:shadow-red-100 hover:shadow-2xl transition-all duration-200"
                >
                  <h2 className="text-2xl text-red-500 w-20 text-start sm:ml-2 capitalize">
                    {todo.title}
                  </h2>
                  <FaHandPointRight className="hidden md:block" />
                  <p className="text-red-700">{todo.date}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </main>
      )}
    </>
  );
};

export default Todos;
