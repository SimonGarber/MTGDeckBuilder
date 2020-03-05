import createDataContext from "./createDataContext";
import searchedArray from "../helpers/checkResult";
const DEV = `http://localhost:3001/api/v1/`;
const PROD = `https://mtgdeckbuilder-api.herokuapp.com/api/v1/`;

const searchReducer = (state, action) => {
  switch (action.type) {
    case "search_database":
      return { ...state, cards: action.payload };
    case "reset_search":
      return { ...state, cards: action.payload };
    case "update_search":
      return {
        cards: action.payload
      };
    default:
      return state;
  }
};

const updateSearch = dispatch => async (cards, updatedCard) => {
  let id = updatedCard.id;
  let index = cards.findIndex(item => item.id === id);
  const updatedCards = cards.splice(index, 1, updatedCard);
  dispatch({
    type: "updated_search",
    payload: updatedCards
  });
};

const searchDatabase = dispatch => async (data, state) => {
  const { cards } = state;

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
    const searchCards = await resData.data.map(card => {
      return {
        id: card.id,
        name: card.name,
        set: card.set,
        set_name: card.set_name,
        type_line: card.type_line,
        oracle_text: card.oracle_text,
        image_uris: card.image_uris,
        foil: card.foil,
        nonfoil: card.nonfoil,
        promo: card.promo,
        set_type: card.set_type,
        cmc: card.cmc,
        colors: card.colors,
        color_identity: card.color_identity,
        legalities: card.legalities,
        collector_number: card.collector_number,
        inCollection: searchedArray(card.id, cards)
      };
    });
    dispatch({
      type: "search_database",
      payload: searchCards
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
  { searchDatabase, resetSearch, updateSearch },
  { cards: [] }
);
