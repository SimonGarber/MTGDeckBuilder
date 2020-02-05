import React, { useContext, useState, useEffect } from "react";
import DashBoard from "../DashBoard/DashBoard";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
import LoadingIndicator from "../LoadingSpinner/LoadingSpinner";
import { trackPromise } from "react-promise-tracker";
import sleeper from "../../helpers/sleeper";
import "./SignUp.css";
const SignUp = props => {
  const { signup } = useContext(AuthContext);
  const [input, setInput] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  const handleSubmit = event => {
    event.preventDefault();
    setIsloading(true);
    trackPromise(
      signup(input)
        .then(sleeper(2000))
        .then(() => {
          props.history.push("/search");
        })
    );
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.history.push("/dashboard");
    }
  }, [props.history]);
  return (
    <React.Fragment>
      <LoadingIndicator />
      <div className={!isLoading ? "center" : "center-collapse"}>
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
            <input
              className="form-submit"
              type="submit"
              onClick={handleSubmit}
            />
          </form>
          <span>
            Already have an account? Click
            <label
              htmlFor="signin"
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
    </React.Fragment>
  );
};

export default SignUp;
