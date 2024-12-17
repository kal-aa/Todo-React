import PropTypes from "prop-types";

const LogOrSign = ({ singLogValue, signlogError, handleLogSign }) => {
  const { logEmail, setLogEmail, signEmail, setSignEmail } = singLogValue;
  const { logErrorMessage, signErrorMessage } = signlogError;
  const { handleLogIn, handleSignUp } = handleLogSign;
  return (
    <div className="logSignContainer mt-[25%] md:mt-[10%]">
      <form onSubmit={handleLogIn}>
        <p className="errorText md:ml-20">{logErrorMessage || "\u00A0"}</p>
        <div className="flex md:flex-row-reverse">
          <input
            type="email"
            name="log-email"
            value={logEmail}
            onChange={(e) => setLogEmail(e.target.value)}
            placeholder="Email"
            required
            className="inputStyles"
          />
          <button type="submit" className="btnStyles">
            Log in
          </button>
        </div>
      </form>
      <form onSubmit={handleSignUp} className="ml-2">
        <p className="md:ml-[90px] errorText">{signErrorMessage || "\u00A0"}</p>
        <div className="flex md:flex-row-reverse">
          <input
            type="email"
            name="sign-email"
            value={signEmail}
            onChange={(e) => setSignEmail(e.target.value)}
            placeholder="Email"
            required
            className="inputStyles"
          />
          <button type="submit" className="btnStyles">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

LogOrSign.propTypes = {
  singLogValue: PropTypes.shape({
    logEmail: PropTypes.string,
    setLogEmail: PropTypes.func,
    signEmail: PropTypes.string,
    setSignEmail: PropTypes.func,
  }),
  signlogError: PropTypes.shape({
    logErrorMessage: PropTypes.string,
    signErrorMessage: PropTypes.string,
  }),
  handleLogSign: PropTypes.shape({
    handleLogIn: PropTypes.func,
    handleSignUp: PropTypes.func,
  }),
};

export default LogOrSign;
