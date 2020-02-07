import createDataContext from "./createDataContext";
import axios from "axios";

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

const searchDatabase = dispatch => async formData => {
  const { cardName, setName, cmc, typeLine, oracleText, colorId } = formData;
  try {
    const response = await axios.get(
      `https://mtgdeckbuilder-api.herokuapp.com/api/v1/query/?name=${cardName}&set=${setName}&cmc=${cmc}&typeLine=${typeLine}&oracleText=${oracleText}&colorIdentity=${colorId}`
    );
    dispatch({
      type: "search_database",
      payload: response.data.data
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
