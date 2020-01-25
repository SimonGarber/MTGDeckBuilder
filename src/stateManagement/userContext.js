import React, { createContext, Component } from "react";

export const UserContext = createContext({
  ismodern: false,
  iscommander: false,
  islegacy: false,
  isvintage: false,
  updateIsCommander: () => {},
  updateIsVintage: () => {},
  updateIsLegacy: () => {},
  updateIsModern: () => {}
});

export class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.updateIsCommander = () => {
      if (this.state.iscommander) {
        this.setState({ iscommander: false });
      } else {
        this.setState({ iscommander: true });
      }
    };
    this.updateIsLegacy = () => {
      if (this.state.islegacy) {
        this.setState({ islegacy: false });
      } else {
        this.setState({ islegacy: true });
      }
    };
    this.updateIsVintage = () => {
      if (this.state.isvintage) {
        this.setState({ isvintage: false });
      } else {
        this.setState({ isvintage: true });
      }
    };
    this.updateIsModern = () => {
      if (this.state.ismodern) {
        this.setState({ ismodern: false });
      } else {
        this.setState({ ismodern: true });
      }
    };

    this.state = {
      ismodern: false,
      iscommander: false,
      isvintage: false,
      islegacy: false,
      updateIsModern: this.updateIsModern,
      updateIsCommander: this.updateIsCommander,
      updateIsLegacy: this.updateIsLegacy,
      updateIsVintage: this.updateIsVintage
    };
  }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
