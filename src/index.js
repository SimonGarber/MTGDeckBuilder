import React from "react";
import { render } from "react-dom";
import DashBoard from "./DashBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider as AuthProvider } from "./stateManagement/AuthContext";
import WithAuth from "./components/WithAuth/WithAuth";
import SignIn from "./components/SignIn/SignIn";

const App = () => (
  <AuthProvider>
    <div>
      <Router>
        <Switch>
          <Route path="/dashboard" exact component={WithAuth(DashBoard)} />
          <Route path="/" component={SignIn} />
        </Switch>
      </Router>
    </div>
  </AuthProvider>
);
render(
  <App />,

  document.getElementById("root")
);
