import { useHistory } from "react-router-dom";
import AddTodo from "../components/AddTodo";
import { useState } from "react";

const AddPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useHistory();

  const went = (data) => {
    setLoading(true);

    fetch("http://localhost:7000/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      setLoading(false);
      navigate.push('/')
    });
  };

  return <AddTodo go={went} loading={loading} />;
};

export default AddPage;
