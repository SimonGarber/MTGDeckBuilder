import createDataContext from "./createDataContext";
import axios from "axios";

const cardsReducer = (state, action) => {
	switch (action.type) {
		case "remove_card":
			return {
				...state,
				cards: state.cards.filter(
					card => card.id !== action.payload.deletedCard
				)
			};
		case "add_card":
			return {
				...state,
				cards: state.cards.filter(card => card.id === action.payload)
			};

		case "get_cards":
			return {
				...state,
				cards: action.payload.cards,
				numberOfCards: action.payload.numberOfCards
			};
		case "get_card":
			return { ...state, showCard: action.payload };

		default:
			return state;
	}
};

const getCards = dispatch => async state => {
	const { userId } = state;
	try {
		const response = await axios.get(
			// `http://localhost:5000/api/v1/usercards/?userId=${userId}`
			`https://mtgdeckbuilder-api.herokuapp.com/api/v1/usercards/?userId=${userId}`
		);

		dispatch({
			type: "get_cards",
			payload: {
				cards: response.data.data[0].cards,
				numberOfCards: response.data.data[0].numberOfCards
			}
		});
	} catch (err) {
		console.log("Error in Get Cards =>", err);
	}
};
const getCard = dispatch => async card => {
	try {
		const response = await axios.get(
			// `http://localhost:5000/api/v1/cards/${card.id}`
			`https://mtgdeckbuilder-api.herokuapp.com/api/v1/cards/${card.id}`
		);
		if (!response.data) {
			return;
		}
		dispatch({
			type: "get_card",
			payload: card
		});
	} catch (err) {
		console.log("Error Showing Card =>", err.message);
	}
};

const getSearchCard = dispatch => async ({ item }) => {
	dispatch({
		type: "get_card",
		payload: {
			id: item.id,
			name: item.name,
			image: item.image,
			userId: item.userId
		}
	});
};

const addCard = dispatch => async (userId, card) => {
	try {
		const response = await axios.put(
			// `http://localhost:5000/api/v1/users/${userId}`,
			`https://mtgdeckbuilder-api.herokuapp.com/api/v1/users/${userId}`,
			{
				card
			}
		);
		if (!response.data) {
		}
		dispatch({
			type: "add_card",
			payload: response.data
		});

		dispatch({
			type: "get_card",
			payload: {
				card
			}
		});
	} catch (err) {
		console.log("Error in Add_Card =>", err);
	}
};

const removeCard = dispatch => async ({ state, card }) => {
	const { userId } = state;
	try {
		const response = await axios.put(
			// `http://localhost:5000/api/v1/users/cards/delete/${userId}`,
			`https://mtgdeckbuilder-api.herokuapp.com/api/v1/users/cards/delete/${userId}`,
			{
				card: { id: card.id }
			}
		);
		if (!response) {
			console.log("Error!?!?");
		}
		dispatch({
			type: "remove_card",
			payload: {
				userCards: response.data.data.cards,
				deletedCard: card.id
			}
		});
		dispatch({
			type: "get_cards",
			payload: response.data.data[0].cards
		});
	} catch (err) {
		console.log("Error in Remove Card =>", err.message);
	}
};

export const { Context, Provider } = createDataContext(
	cardsReducer,
	{ removeCard, addCard, getCards, getCard, getSearchCard },
	{ cards: [], showCard: {}, numberOfCards: "" }
);
