import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import EditTodo from "../components/EditTodo";

const EditPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    date: "",
    time: "",
  });
  const { id } = useParams();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const url = `https://todo-backend-ten-tau.vercel.app/select-todo/${id}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching todo");
        }
        return res.json();
      })
      .then((data) => {
        setFormData(data);
      })
      .catch((err) => {
        console.error("Error fetching todo", err);
      });
  }, [id]);

  const handleEdit = (e) => {
    e.preventDefault();
    const url = `https://todo-backend-ten-tau.vercel.app/update-todo/${id}`;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error Updating todo");
        }
        history.go(-2);
        toast.success("Edit Saved");
      })
      .catch((err) => {
        console.error("Error updating todo", err);
      });
  };

  return (
    <EditTodo
      formData={formData}
      handleEdit={handleEdit}
      handleChange={handleChange}
    />
  );
};

export default EditPage;
