import React, { useContext, useState, useEffect } from "react";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
import { Context as SearchContext } from "../../stateManagement/searchCardsContext";
import Portal from "../Portal/Portal";
import LoadingIndicator from "../LoadingSpinner/LoadingSpinner";
import { trackPromise } from "react-promise-tracker";
import sleeper from "../../helpers/sleeper";
import "./SignIn.css";

const SignIn = props => {
  const { signin } = useContext(AuthContext);
  const { resetSearch } = useContext(SearchContext);
  const [input, setInput] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    trackPromise(
      signin(input)
        .then(sleeper(2000))
        .then(() => {
          resetSearch();
          props.history.push("/search");
        })
        .catch(err => {
          console.log("Error signing in =>", err);
        })
    );
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.history.push("/search");
    }
  }, [props.history]);
  return (
    <>
      <LoadingIndicator />
      <Portal>
        <div className={!isLoading ? "center" : "FormContainer-collapse"}>
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
      </Portal>
    </>
  );
};

export default SignIn;
