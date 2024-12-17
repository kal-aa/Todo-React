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
  const { todo_id } = useParams();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const url = `https://todo-backend-ten-tau.vercel.app/select-todo/${todo_id}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching todo");
        }
        return res.json();
      })
      .then((data) => {
        const fullTime = data.time.split(" "); // 08:00, AM
        const amPm = fullTime[1]; //  AM
        const hourMin = fullTime[0].split(":"); // 08, 00
        const hour = parseInt(hourMin[0]); // 08
        const min = hourMin[1]; // 00
        let time;
        if (hour === 12 && amPm === "AM") {
          time = `00:${min}`;
        } else if (amPm === "AM") {
          time = hour < 10 ? `0${hour}:${min}` : `${hour}:${min}`;
        } else {
          const adjustedHour = hour === 12 ? 12 : hour + 12;
          time = `${adjustedHour}:${min}`;
        }
        setFormData({ ...data, time });
      })
      .catch((err) => {
        console.error("Error fetching todo", err);
      });
  }, [todo_id]);

  const handleEdit = (e) => {
    e.preventDefault();
    const time = formData.time;
    const split = time.split(":");
    const hours = parseInt(split[0]);
    const minutes = split[1];

    if (hours === 0) {
      formData.time = `12:${minutes} AM`;
    } else if (hours < 12) {
      formData.time = `${hours}:${minutes} AM`;
    } else if (hours === 12) {
      formData.time = `12:${minutes} PM`;
    } else {
      const adjustedHours = hours - 12;
      formData.time = `${adjustedHours}:${minutes} PM`;
    }

    const url = `https://todo-backend-ten-tau.vercel.app/update-todo/${todo_id}`;
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
