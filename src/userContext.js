import React, { createContext, Component } from 'react';

export const UserContext = createContext({
  username: '',
  userpassword: '',
  savedcards: [],
  showcarddetails: false,
  ismodern: false,
  updateIsModern: () => {},
  updateShowCardDetails: () => {},
  updateSavedCards: () => {},
  updateUserName: () => {},
  updateUserPassword: () => {}
});

export class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.updateIsModern = () => {
      if (this.state.isModern) {
        this.setState({ isModern: false });
      } else {
        this.setState({ isModern: true });
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
      updateUserName: this.updateUserName,
      updateUserPassword: this.updateUserPassword,
      updateSavedCards: this.updateSavedCards,
      updateIsModern: this.updateIsModern,
      isModern: false
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
