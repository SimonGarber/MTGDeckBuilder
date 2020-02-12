import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

ReactDOM.render(
	<Router>
		<ThemeProvider theme={theme}>
			<App history={history} />
		</ThemeProvider>
	</Router>,
	document.getElementById("root")
);
