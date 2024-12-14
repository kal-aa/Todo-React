import { useHistory } from "react-router-dom";
import AddTodo from "../components/AddTodo";
import { useState } from "react";
import { toast } from "react-toastify";

const AddPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useHistory();

  const went = (data) => {
    setLoading(true);

    setTimeout(() => {
      fetch("/assets/data.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(() => {
        setLoading(false);
        navigate.push("/");
        toast.success(`'${data.title}' Added Successfully`);
      });
    }, 2000);
  };

  return <AddTodo go={went} loading={loading} />;
};

export default AddPage;
