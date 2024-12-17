import { FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";

const EditTodo = ({ formData, handleEdit, handleChange }) => {
  return (
    <div className="mt-[10%] px-[10%] sm:px-[20%] md:px-[30%] w-full">
      <h1 className="text-center text-4xl font-medium">Edit a Todo List</h1>
      <form onSubmit={handleEdit} className="input-div">
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
          id="date"
          name="date"
          type="date"
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
            type="submit"
            className="bg-red-500 px-4 py-2 text-white hover:bg-red-400 rounded-full w-full"
          >
            Edit
            <FaEdit className="inline ml-1 mb-1" />
          </button>
        </div>
      </form>
    </div>
  );
};

EditTodo.propTypes = {
  formData: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EditTodo;
