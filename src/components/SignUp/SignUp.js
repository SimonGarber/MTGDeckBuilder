import React, { useContext, useState, useEffect } from "react";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
import "./SignUp.css";
const SignUp = props => {
  const { state, signup } = useContext(AuthContext);
  const [input, setInput] = useState({});
  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  const handleSubmit = event => {
    event.preventDefault();

    signup(input).then(() => {
      props.history.push("/dashboard");
    });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.history.push("/dashboard");
    }
  }, [props.history]);
  return (
    <div className="center">
      <div className="card">
        <h1>Register for an account</h1>
        <form>
          <input
            className="form-item"
            placeholder="Email"
            name="email"
            type="text"
            onChange={handleInputChange}
          />
          <input
            className="form-item"
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleInputChange}
          />
          <input className="form-submit" type="submit" onClick={handleSubmit} />
        </form>
        <span>
          Already have an account? Click
          <label
            for="signin"
            id="signin"
            onClick={() => {
              props.history.push("/signin");
            }}
          >
            {" "}
            here
          </label>
          to log in
        </span>
      </div>
    </div>
  );
};

export default SignUp;
