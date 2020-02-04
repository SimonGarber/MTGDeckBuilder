import React from "react";

import { Switch, Route } from "react-router-dom";
import { Provider as AuthProvider } from "./stateManagement/AuthContext";
import { Provider as UserCardsProvider } from "./stateManagement/userCardsContext";
import WithAuth from "./components/WithAuth/WithAuth";
import GetCards from "./components/GetCards/GetCards";
import Cards from "./components/Cards/Cards";
import UserCard from "./components/Card/Card";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  return (
    <AuthProvider>
      <UserCardsProvider>
        <div>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/search" component={WithAuth(GetCards)} />
            <Route exact path="/cards" component={WithAuth(Cards)} />
            <Route path={`/cards/:cardId`} component={UserCard} />
          </Switch>
        </div>
      </UserCardsProvider>
    </AuthProvider>
  );
};
export default App;
