import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider as AuthProvider } from "./stateManagement/AuthContext";
import { Provider as UserCardsProvider } from "./stateManagement/userCardsContext";
import WithAuth from "./components/WithAuth/WithAuth";
import GetCards from "./components/GetCards/GetCards";
import Cards from "./components/Cards/Cards";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  return (
    <AuthProvider>
      <UserCardsProvider>
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={SignIn} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/search" component={WithAuth(GetCards)} />
              <Route exact path="/cards" component={WithAuth(Cards)} />
            </Switch>
          </Router>
        </div>
      </UserCardsProvider>
    </AuthProvider>
  );
};

render(<App />, document.getElementById("portal"));
