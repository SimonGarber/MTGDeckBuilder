import createDataContext from "./createDataContext";
import axios from "axios";
const authReducer = (state, action) => {
	switch (action.type) {
		case "signin":
			return {
				errorMessage: "",
				token: action.payload.token,
				userId: action.payload.userId
			};
		case "signout":
			return { token: null, errorMessage: "", userId: null };
		default:
			return state;
	}
};

const signout = dispatch => async () => {
	localStorage.removeItem("token");
	localStorage.removeItem("userId");
	dispatch({
		type: "signout"
	});
};
const signup = dispatch => async input => {
	try {
		const { email, password } = input;
		const response = await axios.post(
			`http://localhost:5000/api/v1/users/signup`,
			// "https://mtgdeckbuilder-api.herokuapp.com/api/v1/users/signup",
			{ email, password }
		);
		localStorage.setItem("token", response.data.token);
		localStorage.setItem("userId", response.data.userId);

		dispatch({
			type: "signin",
			payload: { token: response.data.token, userId: response.data.userId }
		});
	} catch (err) {
		console.log("Error =>", err.message);
	}
};
const signin = dispatch => async input => {
	try {
		const { email, password } = input;
		const response = await axios.post(
			`http://localhost:5000/api/v1/users/signin`,
			// "https://mtgdeckbuilder-api.herokuapp.com/api/v1/users/signin",
			{ email, password }
		);
		localStorage.setItem("token", response.data.token);
		localStorage.setItem("userId", response.data.userId);

		dispatch({
			type: "signin",
			payload: { token: response.data.token, userId: response.data.userId }
		});
	} catch (err) {
		console.log("Error =>", err.message);
	}
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signin, signout, signup },
	{
		token: localStorage.getItem("token") || null,
		errorMessage: "",
		userId: localStorage.getItem("userId") || null
	}
);
