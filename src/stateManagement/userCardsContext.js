import createDataContext from "./createDataContext";

const cardsReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(cardsReducer, []);
