import React, { createContext, Component } from 'react';

export const UserContext = createContext({
  username: '',
  userpassword: '',
  savedcards: [],
  updateSavedCards: () => {},
  updateUserName: () => {},
  updateUserPassword: () => {}
});

export class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.updateUserPassword = (newUserPassword) => {
      this.setState({ userpassword: newUserPassword });
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
      updateSavedCards: this.updateSavedCards
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
