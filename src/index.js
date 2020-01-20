import React from "react";
import { render } from "react-dom";
import GetCards from "./components/GetCards/GetCards";
import Cards from "./components/Cards/Cards";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider as AuthProvider } from "./stateManagement/AuthContext";
import { Provider as UserCardsProvider } from "./stateManagement/userCardsContext";
import WithAuth from "./components/WithAuth/WithAuth";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  return (
    <AuthProvider>
      <UserCardsProvider>
        <div>
          <Router>
            <Switch>
              <Route path="/cards" exact component={WithAuth(Cards)} />
              <Route path="/search" exact component={WithAuth(GetCards)} />
              <Route path="/" exact component={SignIn} />
              <Route path="/signin" exact component={SignIn} />
              <Route path="/signup" exact component={SignUp} />
            </Switch>
          </Router>
        </div>
      </UserCardsProvider>
    </AuthProvider>
  );
};

render(<App />, document.getElementById("portal"));
