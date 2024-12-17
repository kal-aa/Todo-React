import { useHistory, useParams } from "react-router-dom";
import AddTodo from "../components/AddTodo";
import { useState } from "react";
import { toast } from "react-toastify";

const AddPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useHistory();
  const { email_id } = useParams();

  const handleSubmit = (data) => {
    setLoading(true);
    fetch(`https://todo-backend-ten-tau.vercel.app/create-todo/${email_id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error posting todo");
        }

        setLoading(false);
        navigate.push(`/todos/${email_id}`);
        toast.success(`'${data.title}' Added Successfully`);
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error posting todo", err);
      });
  };

  return <AddTodo handleSubmit={handleSubmit} loading={loading} />;
};

export default AddPage;
