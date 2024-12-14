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
  const url = `http://localhost:7000/data/${id}`;

  useEffect(() => {
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
  }, [url]);

  const submit = (e) => {
    e.preventDefault();

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
    <EditTodo formData={formData} submit={submit} handleChange={handleChange} />
  );
};

export default EditPage;
