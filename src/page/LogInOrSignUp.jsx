import { useState } from "react";
import { useHistory } from "react-router-dom";

const LogInOrSignUp = () => {
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

  const btnStyles = "bg-blue-400 px-3 py-2 text-white font-bold rounded-xl";
  const inputStyles = "border-2 py-1.5 mx-2 pl-3 rounded-lg outline-none";

  return (
    <div className="flex flex-col justify-center items-center space-y-5 mt-32 md:flex-row md:space-y-0 md:space-x-5">
      <form onSubmit={handleLogIn}>
        <p className="ml-3 md:ml-20 text-red-600 max-w-48 break-words text-center leading-4">
          {logErrorMessage || "\u00A0"}
        </p>
        <div className="flex md:flex-row-reverse">
          <input
            type="email"
            name="log-email"
            value={logEmail}
            onChange={(e) => setLogEmail(e.target.value)}
            placeholder="Email"
            required
            className={inputStyles}
          />
          <button type="submit" className={btnStyles}>
            Log in
          </button>
        </div>
      </form>
      <form onSubmit={handleSignUp}>
        <p className="ml-3 md:ml-[90px] text-red-600 max-w-48 break-words text-center leading-4">
          {signErrorMessage || "\u00A0"}
        </p>
        <div className="flex md:flex-row-reverse">
          <input
            type="email"
            name="sign-email"
            value={signEmail}
            onChange={(e) => setSignEmail(e.target.value)}
            placeholder="Email"
            required
            className={inputStyles}
          />
          <button type="submit" className={btnStyles}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInOrSignUp;
