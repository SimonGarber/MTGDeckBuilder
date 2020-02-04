import createDataContext from "./createDataContext";
import axios from "axios";

const cardsReducer = (state, action) => {
  switch (action.type) {
    case "remove_card":
      return {
        ...state,
        ...state.cards.filter(card => card.id !== action.payload.deletedCard)
      };
    case "add_card":
      return {
        ...state,
        ...state.cards.filter(card => card.id === action.payload)
      };

    case "get_cards":
      return { ...state, cards: action.payload };
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
      // `http://localhost:3001/api/v1/users/${userId}`
      `https://mtgdeckbuilder-api.herokuapp.com/api/v1/users/${userId}`
    );

    dispatch({
      type: "get_cards",
      payload: response.data.data
    });
  } catch (err) {
    console.log("Error in Get Cards =>", err);
  }
};
const getCard = dispatch => async ({ card }) => {
  try {
    const response = await axios.get(
      // `http://localhost:3001/api/v1/cards/${card.id}`
      `https://mtgdeckbuilder-api.herokuapp.com/api/v1/cards/${card.id}`
    );
    if (!response.data) {
      return;
    }
    dispatch({
      type: "get_card",
      payload: {
        id: response.data.data.id,
        name: response.data.data.name,
        image: response.data.data.image_uris.small
      }
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

const addCard = dispatch => async (
  userId,
  id,
  name,
  image,
  set,
  collectionNumber,
  isFoil,
  isNonFoil,
  set_type,
  isPromo
) => {
  try {
    const response = await axios.put(
      // `http://localhost:3001/api/v1/users/${userId}`,
      `https://mtgdeckbuilder-api.herokuapp.com/api/v1/users/${userId}`,
      {
        card: {
          id: id,
          name: name,
          image: image,
          set: set,
          collectionNumber: collectionNumber,
          isFoil: isFoil,
          isNonFoil: isNonFoil,
          set_type: set_type,
          isPromo: isPromo
        }
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
        id: id,
        name: name,
        image: image,
        set_type: set_type,
        set: set,
        collectionNumber: collectionNumber,
        isFoil: isFoil,
        isNonFoil: isNonFoil
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
      // `http://localhost:3001/api/v1/users/cards/delete/${userId}`,
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
      payload: response.data.data.cards
    });
  } catch (err) {
    console.log("Error in Remove Card =>", err.message);
  }
};

export const { Context, Provider } = createDataContext(
  cardsReducer,
  { removeCard, addCard, getCards, getCard, getSearchCard },
  { cards: [], showCard: {} }
);
