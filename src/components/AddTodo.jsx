import { useState } from "react";
import { FaPen } from "react-icons/fa";
import PropTypes from "prop-types";

const AddTodo = ({ handleSubmit, loading }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    date: "",
    time: "08:00",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submit = (e) => {
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
    handleSubmit(formData);
  };

  return (
    <div className="flex flex-col px-[10%] sm:px-[20%] md:px-[30%] mt-[10%] md:mt-[5%]">
      <h1 className="text-center text-4xl font-medium">
        Adc
        <FaPen className="inline text-3xl mb-2 -rotate-45 text-red-900 -ml-4 -mt-3" />{" "}
        a Todo List
      </h1>
      <form onSubmit={submit} className="input-div">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Todo's Title"
          className="capitalize"
        />
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          name="body"
          rows={2}
          value={formData.body}
          onChange={handleChange}
          required
          placeholder="Todo's Description"
          className="first-letter"
        ></textarea>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <div className="flex justify-center">
          <button
            disabled={loading}
            className="bg-red-500 rounded-full px-4 py-2 text-white hover:bg-red-600 font-bold w-full"
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

export default AddTodo;
