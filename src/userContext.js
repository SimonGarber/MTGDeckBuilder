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
    this.updateSavedCards = (newCard) => {
      this.setState((prevState) => ({
        savedcards: [...prevState.savedcards, newCard]
      }));
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
