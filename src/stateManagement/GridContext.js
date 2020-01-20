import React, { Component, createContext } from "react";
// import sampleItems from "../../src/sampleItems";
import * as UserCardsContext from "./userCardsContext";
import * as AuthContext from "./AuthContext";
function move(array, oldIndex, newIndex) {
  if (newIndex >= array.length) {
    newIndex = array.length - 1;
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
}

function moveElement(array, index, offset) {
  const newIndex = index + offset;

  return move(array, index, newIndex);
}

const GridContext = createContext({ items: [] });

export class GridProvider extends Component {
  // static contextType = UserCardsContext;

  constructor(props) {
    super(props);
    this.state = {
      userId: "5e010ebd0ddc3337c5d435b9",
      items: [],
      moveItem: this.moveItem,
      setItems: this.setItems
    };
  }
  // componentDidMount() {
  //   const { userId } = this.state;
  //   const response = this.getCards();
  //   console.log(response);
  // }
  render() {
    return (
      <GridContext.Provider value={this.state}>
        {this.props.children}
      </GridContext.Provider>
    );
  }

  setItems = items => this.setState({ items });
  setCards = () => console.log(this.context);
  getCards = () => this.context.getCards({ userId });
  moveItem = (sourceId, destinationId) => {
    const sourceIndex = this.state.items.findIndex(
      item => item.id === sourceId
    );
    const destinationIndex = this.state.items.findIndex(
      item => item.id === destinationId
    );
    if (sourceId === -1 || destinationId === -1) {
      return;
    }

    const offset = destinationIndex - sourceIndex;

    this.setState(state => ({
      items: moveElement(state.items, sourceIndex, offset)
    }));
  };
}

// export default GridContext;
