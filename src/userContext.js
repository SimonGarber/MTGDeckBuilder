import React, { createContext, Component } from 'react';

const UserContext = createContext({
  username: '',
  userpassword: '',
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

    this.state = {
      username: 'user',
      userpassword: '',
      updateUserName: this.updateUserName,
      updateUserPassword: this.updateUserPassword
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
