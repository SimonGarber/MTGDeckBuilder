import React, { useContext, useState, useEffect } from "react";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
import { Redirect } from "react-router-dom";
import "./SignIn.css";

const SignIn = props => {
  const { state, signin } = useContext(AuthContext);
  const [input, setInput] = useState({});
  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  const handleSubmit = event => {
    event.preventDefault();

    signin(input).then(() => {
      props.history.push("/search");
    });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.history.push("/search");
    }
  }, [props.history]);
  return (
    <div className="center">
      <div className="card">
        <h1>Sign into your account</h1>
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
          Dont't have an account? Click{" "}
          <label
            for="signup"
            id="signup"
            onClick={() => {
              props.history.push("/signup");
            }}
          >
            {" "}
            here
          </label>
          to Register
        </span>
      </div>
    </div>
  );
};

export default SignIn;
