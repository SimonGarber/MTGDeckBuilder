import React, { createContext, Component } from 'react';

const CollectionContext = createContext({
  savedCards: [],
  updateSavedCards: () => {}
});

export default class CollectionProvider extends Component {
  constructor(props) {
    super(props);
    this.updateSavedCards = (newCard) => {
      this.setState((prevState) => ({
        savedCards: [...prevState.savedCards, newCard]
      }));
    };
    this.state = {
      savedCards: [],
      updateSavedCards: this.updateSavedCards
    };
  }
  render() {
    return (
      <CollectionContext.Provider value={this.state}>
        {this.props.children}
      </CollectionContext.Provider>
    );
  }
}
export const CollectionConsumer = CollectionContext.Consumer;
