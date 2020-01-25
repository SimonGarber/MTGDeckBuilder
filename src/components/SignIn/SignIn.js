import React, { useContext, useState, useEffect } from "react";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
import DashBoard from "../DashBoard/DashBoard";

import "./SignIn.css";

const SignIn = props => {
  const { signin } = useContext(AuthContext);
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
    <React.Fragment>
      <DashBoard />
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
            <input
              className="form-submit"
              type="submit"
              onClick={handleSubmit}
            />
          </form>
          <span>
            Dont't have an account? Click{" "}
            <label
              htmlFor="signup"
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
    </React.Fragment>
  );
};

export default SignIn;
