import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider as UserCardsProvider } from "./stateManagement/userCardsContext";
import { Provider as AuthProvider } from "./stateManagement/AuthContext";
import WithAuth from "./components/WithAuth/WithAuth";
import GetCards from "./components/GetCards/GetCards";
import Cards from "./components/Cards/Cards";
import UserCard from "./components/Card/Card";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ToolBar from "./components/ToolBar/ToolBar";

const routes = [
  {
    path: "/search",
    component: WithAuth(GetCards)
  },
  {
    path: "/cards",
    component: WithAuth(Cards)
  },
  { path: "/signin", component: SignIn },
  {
    path: "/signup",
    component: SignUp
  },
  {
    path: `/cards/:cardId`,
    component: UserCard
  },
  {
    path: "/",
    component: SignIn
  }
];

const App = props => {
  return (
    <AuthProvider>
      <UserCardsProvider>
        <ToolBar history={props.history} />
        <Switch>
          {routes.map(({ path, component: C }) => (
            <Route
              key={path}
              exact={path !== `/cards/:cardId` ? true : false}
              path={path}
              render={props => <C {...props} />}
            />
          ))}
        </Switch>
      </UserCardsProvider>
    </AuthProvider>
  );
};

export default App;
