import React, { useContext } from "react";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
import AuthForm from "../AuthForm/AuthForm";

const SignUp = () => {
  const { state } = useContext(AuthContext);

  return (
    <div>
      <AuthForm />
    </div>
  );
};

export default SignUp;
