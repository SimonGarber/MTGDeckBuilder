import React from "react";
import Nav from "./components/navigation/Nav";
// import { BrowserRouter } from "react-router-dom";
import NewForm from "./components/Form/Form";
// import FormikSignin from "./components/Form/FormikSignin";
import { Switch, Route } from "react-router-dom";
import { Provider as UserCardsProvider } from "./stateManagement/userCardsContext";
import { Provider as AuthProvider } from "./stateManagement/AuthContext";
import { Provider as SearchCardsProvider } from "./stateManagement/searchCardsContext";

import WithAuth from "./components/WithAuth/WithAuth";
import Cards from "./components/Cards/Cards";
import UserCard from "./components/Card/Card";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const routes = [
	{
		path: "/search",
		component: WithAuth(NewForm)
	},
	{
		path: "/cards",
		component: Cards
	},
	{ path: "/signin", component: SignIn },
	{
		path: "/signup",
		component: SignUp
	},
	{
		path: `/cards/:cardId`,
		component: UserCard
	}
];

const App = props => {
	return (
		<AuthProvider>
			<UserCardsProvider>
				<SearchCardsProvider>
					<>
						<Nav history={props.history} />

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
					</>
				</SearchCardsProvider>
			</UserCardsProvider>
		</AuthProvider>
	);
};
// const App = props => {
// 	return (
// 		<AuthProvider>
// 			<UserCardsProvider>
// 				<SearchCardsProvider>
// 					<div>
// 						<ToolBar history={props.history} />
// 					</div>
// 					<Switch>
// 						{routes.map(({ path, component: C }) => (
// 							<Route
// 								key={path}
// 								exact={path !== `/cards/:cardId` ? true : false}
// 								path={path}
// 								render={
// 									path === "/search"
// 										? props => (
// 												<FormDataProvider>
// 													<C {...props} />{" "}
// 												</FormDataProvider>
// 										  )
// 										: props => <C {...props} />
// 								}
// 							/>
// 						))}
// 					</Switch>
// 				</SearchCardsProvider>
// 			</UserCardsProvider>
// 		</AuthProvider>
// 	);
// };

export default App;
