import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import LogOrSign from "../components/LogOrSign";

const LOgOrSignPage = () => {
  const [logEmail, setLogEmail] = useState("");
  const [signEmail, setSignEmail] = useState("");
  const [logErrorMessage, setLogErrorMessage] = useState("");
  const [signErrorMessage, setSignErrorMessage] = useState("");
  const [isLogging, setIsLogging] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  let timeoutRef = useRef(null);
  const navigate = useHistory();

  const handleLogIn = (e) => {
    e.preventDefault();
    const url = `https://todo-backend-ten-tau.vercel.app/log-in?email=${encodeURIComponent(
      logEmail
    )}`;
    setIsLogging(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            setLogErrorMessage(err.message);
            timeoutRef.current && clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
              setLogErrorMessage("");
            }, 3000);
            throw new Error("Error fetchig logging email_id");
          });
        }

        return res.json();
      })
      .then((data) => {
        setIsLogging(false);
        navigate.push(`/todos/${data.email_id}`);
      })
      .catch((err) => {
        setIsLogging(false);
        console.error("Error fetching logging email_id", err);
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const url = "https://todo-backend-ten-tau.vercel.app/sign-up";
    setIsSigning(true);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: signEmail }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            setSignErrorMessage(err.message);
            timeoutRef.current && clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
              setSignErrorMessage("");
            }, 3000);
            throw new Error("Error posting email");
          });
        }
        return res.json();
      })
      .then((data) => {
        setIsSigning(false);
        navigate.push(`/todos/${data.email_id}`);
      })
      .catch((error) => {
        setIsSigning(false);
        console.error("Error posting signign email", error);
      });
  };

  return (
    <LogOrSign
      singLogValue={{
        logEmail,
        setLogEmail,
        signEmail,
        setSignEmail,
        isLogging,
        isSigning,
      }}
      signlogError={{ logErrorMessage, signErrorMessage }}
      handleLogSign={{ handleLogIn, handleSignUp }}
    />
  );
};

export default LOgOrSignPage;
