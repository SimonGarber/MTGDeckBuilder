import createDataContext from "./createDataContext";

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
			`https://mtgdeckbuilder-api.herokuapp.com/api/v1/query`,
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

const resetSearch = dispatch => emptyCards => {
	dispatch({
		type: "reset_search",
		payload: emptyCards
	});
};

export const { Context, Provider } = createDataContext(
	searchReducer,
	{ searchDatabase, resetSearch },
	{ cards: [] }
);
