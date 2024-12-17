import { useState } from "react";
import { useHistory } from "react-router-dom";
import LogOrSign from "../components/LogOrSign";

const LOgOrSignPage = () => {
  const [logEmail, setLogEmail] = useState("");
  const [signEmail, setSignEmail] = useState("");
  const [logErrorMessage, setLogErrorMessage] = useState("");
  const [signErrorMessage, setSignErrorMessage] = useState("");
  const navigate = useHistory();

  const handleLogIn = (e) => {
    e.preventDefault();
    const url = `https://todo-backend-ten-tau.vercel.app/log-in?email=${encodeURIComponent(
      logEmail
    )}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            setLogErrorMessage(err.message);
            setTimeout(() => {
              setLogErrorMessage("");
            }, 3000);
            throw new Error("Error fetchig logging email_id");
          });
        }

        return res.json();
      })
      .then((data) => {
        navigate.push(`/todos/${data.email_id}`);
      })
      .catch((err) => {
        console.error("Error fetching logging email_id", err);
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const url = "https://todo-backend-ten-tau.vercel.app/sign-up";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: signEmail }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            setSignErrorMessage(err.message);
            setTimeout(() => {
              setSignErrorMessage("");
            }, 3000);
            throw new Error("Error posting email");
          });
        }
        return res.json();
      })
      .then((data) => {
        navigate.push(`/todos/${data.email_id}`);
      })
      .catch((error) => {
        console.error("Error posting signign email", error);
      });
  };

  return (
    <LogOrSign
      singLogValue={{ logEmail, setLogEmail, signEmail, setSignEmail }}
      signlogError={{ logErrorMessage, signErrorMessage }}
      handleLogSign={{ handleLogIn, handleSignUp }}
    />
  );
};

export default LOgOrSignPage;
