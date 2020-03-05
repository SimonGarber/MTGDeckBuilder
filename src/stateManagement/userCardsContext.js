import createDataContext from "./createDataContext";
import axios from "axios";
const DEV = `http://localhost:3001/api/v1/`;
const PROD = `https://mtgdeckbuilder-api.herokuapp.com/api/v1/`;
const cardsReducer = (state, action) => {
  switch (action.type) {
    case "remove_card":
      return {
        cards: state.cards.filter(
          card => card.id !== action.payload.deletedCard
        )
      };
    case "add_card":
      return {
        cards: state.cards.filter(card => card.id === action.payload.userCards)
      };

    case "get_cards":
      return {
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
      process.env.NODE_ENV === "development"
        ? `${DEV}usercards/?userId=${userId}`
        : `${PROD}usercards/?userId=${userId}`
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
      process.env.NODE_ENV === "development"
        ? `${DEV}cards/${card.id}`
        : `${PROD}cards/${card.id}`
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

const addCard = dispatch => async (userId, card) => {
  try {
    const response = await axios.put(
      process.env.NODE_ENV === "development"
        ? `${DEV}users/${userId}`
        : `${PROD}users/${userId}`,
      {
        card
      }
    );

    if (!response) {
      console.log("Error!?");
    }
    dispatch({
      type: "add_card",
      payload: {
        userCards: response.data,
        addedCard: card.id
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
      process.env.NODE_ENV === "development"
        ? `${DEV}users/cards/delete/${userId}`
        : `${PROD}users/cards/delete/${userId}`,
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
  } catch (err) {
    console.log("Error in Remove Card =>", err.message);
  }
};

export const { Context, Provider } = createDataContext(
  cardsReducer,
  { removeCard, addCard, getCards, getCard },
  { cards: [], showCard: {}, numberOfCards: "" }
);
