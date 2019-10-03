export const addCard = (store) => {
  const addToCollection = { ...store.state.user.collection };
  addToCollection.cardToAdd++;
  store.setState({ collection: addToCollection });
};
