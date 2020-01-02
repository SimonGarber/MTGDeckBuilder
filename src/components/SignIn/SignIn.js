import React, { useContext, useState } from "react";
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
      props.history.push("/dashboard");
    });
  };
  return (
    <div className="center">
      <div className="card">
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
      </div>
    </div>
  );
};

export default SignIn;
