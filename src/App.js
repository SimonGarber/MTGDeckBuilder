import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider as UserCardsProvider } from "./stateManagement/userCardsContext";
import { Provider as AuthProvider } from "./stateManagement/AuthContext";
import { Provider as SearchCardsProvider } from "./stateManagement/searchCardsContext";
import WithAuth from "./components/WithAuth/WithAuth";
import GetCards from "./components/GetCards/GetCards";
import Cards from "./components/Cards/Cards";
import UserCard from "./components/Card/Card";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ToolBar from "./components/ToolBar/ToolBar";
import Portal from "./components/Portal/Portal";
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
        <SearchCardsProvider>
          <div>
            <ToolBar history={props.history} />
          </div>
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
        </SearchCardsProvider>
      </UserCardsProvider>
    </AuthProvider>
  );
};

export default App;
