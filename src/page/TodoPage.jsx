import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Todo from "../components/Todo";

const TodoPage = () => {
  const [todo, setTodo] = useState([]);
  const { todo_id } = useParams();
  const navigate = useHistory();
  useEffect(() => {
    const url = `https://todo-backend-ten-tau.vercel.app/select-todo/${todo_id}`;
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
  }, [todo_id]);

  const handleDelete = () => {
    const url = `https://todo-backend-ten-tau.vercel.app/delete-todo/${todo_id}`;
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

  return <Todo todo={todo} handleDelete={handleDelete} />;
};

export default TodoPage;
