import createDataContext from "./createDataContext";
const DEV = `http://localhost:3001/api/v1/`;
const PROD = `https://mtgdeckbuilder-api.herokuapp.com/api/v1/`;

const searchReducer = (state, action) => {
	switch (action.type) {
		case "search_database":
			return { ...state, cards: action.payload };
		case "reset_search":
			return { ...state, cards: action.payload };
		default:
			return state;
	}
};

const searchDatabase = dispatch => async data => {
	try {
		const response = await fetch(
			process.env.NODE_ENV === "development" ? `${DEV}query` : `${PROD}query`,
			{
				method: "POST",
				mode: "cors",
				cache: "no-cache",
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json"
				},
				redirect: "follow",
				referrerPolicy: "no-referrer",
				body: JSON.stringify(data)
			}
		);
		const resData = await response.json();

		dispatch({
			type: "search_database",
			payload: resData.data
		});
	} catch (err) {
		console.log("Error in Database Query =>", err);
	}
};

const resetSearch = dispatch => () => {
	dispatch({
		type: "reset_search",
		payload: []
	});
};

export const { Context, Provider } = createDataContext(
	searchReducer,
	{ searchDatabase, resetSearch },
	{ cards: [] }
);
