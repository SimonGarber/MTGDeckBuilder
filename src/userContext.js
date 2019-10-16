import React, { createContext, Component } from 'react';

export const UserContext = createContext({
  username: '',
  userpassword: '',
  savedcards: [],
  showcarddetails: false,
  ismodern: false,
  iscommander: false,
  islegacy: false,
  isvintage: false,
  updateIsCommander: () => {},
  updateIsVintage: () => {},
  updateIsLegacy: () => {},
  updateIsModern: () => {},
  updateShowCardDetails: () => {},
  updateSavedCards: () => {},
  updateUserName: () => {},
  updateUserPassword: () => {}
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
    this.updateUserPassword = (newUserPassword) => {
      this.setState({ userpassword: newUserPassword });
    };
    this.showCardDetails = () => {
      this.setState({ showcarddetails: true });
    };
    this.updateUserName = (newUserName) => {
      this.setState({ username: newUserName });
    };
    this.updateSavedCards = (card) => {
      console.log(card.id);
      const request = new Request(`http://localhost:3001/api/save-card`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ card }),
        mode: 'no-cors'
      });
      fetch(request).then((response) => {
        response
          .json()
          .then((body) => {
            console.log(body);
          })
          .then(() => {
            this.setState((prevState) => ({
              savedcards: [...prevState.savedcards, card]
            }));
          })
          .catch((err) => {
            console.log(err);
          });
      });
    };

    this.state = {
      username: '',
      userpassword: '',
      savedcards: [],
      ismodern: false,
      iscommander: false,
      isvintage: false,
      islegacy: false,
      updateUserName: this.updateUserName,
      updateUserPassword: this.updateUserPassword,
      updateSavedCards: this.updateSavedCards,
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
