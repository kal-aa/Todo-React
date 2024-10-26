import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {toast} from "react-toastify"
import { FaEdit } from "react-icons/fa";

const EditPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("08:00");
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useHistory();
  const url = "http://localhost:7000/data/" + id;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodo(data);
        setLoading(false);
        setTitle(data.title)
        setBody(data.body)
        setDate(data.date)
        setTime(data.time)
      });
  }, []);

  const submit = () => {
    const data = {
      title,
      body,
      date,
      time,
    };
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      navigate.go(-2);
      toast.success('Edit Saved')
    });
  };

  return (
    <div className="mx-10 my-10 max-w-xl">
      <h1 className="text-center text-4xl font-medium">Edit a Todo List</h1>
      <form onSubmit={submit} className="input-div">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Todo's Title"
          className="capitalize"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          placeholder="Todo's Description"
          rows={2}
          value={body}
          className="first-letter"
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <div className="flex justify-center">
          <button className="bg-red-500 rounded-lg px-4 py-2 text-white hover:bg-red-400">
            Edit
            <FaEdit className="inline ml-1 mb-1"/>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
