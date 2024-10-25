import { useState } from "react";

const AddTodo = ({ go, loading }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("08:00");

  const submit = (e) => {
    e.preventDefault();

    const data = {
      title,
      body,
      date,
      time,
    };
    go(data);
  };

  return (
    <div className="mx-10 my-10 max-w-xl">
      <h1 className="text-center text-4xl font-medium">Add a Todo List</h1>
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
          rows={3}
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
          {!loading && (
            <button className="bg-red-500 rounded-lg px-4 py-2 text-white">
              Add
            </button>
          )}
          {loading && (
            <button
              disabled
              className="bg-red-500 rounded-lg px-4 py-2 text-white"
            >
              Adding...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
