import React, { useContext } from "react";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
const AuthScreen = props => {
  const { state } = useContext(AuthContext);
  const handleLogin = () => {
    props.history.replace("/signin");
  };
  const handleRegister = () => {
    props.history.replace("/signup");
  };
  return (
    <React.Fragment>
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </div>
    </React.Fragment>
  );
};
export default AuthScreen;
