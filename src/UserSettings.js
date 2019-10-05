import React from 'react';
import { UserConsumer } from './userContext';

export default function UserSettings(props) {
  return (
    <UserConsumer>
      {({ updateUserName, updateUserPassword }) => (
        <div
          style={{
            float: 'right'
          }}
        >
          <form type="submit" onSubmit={props.addUser}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              onChange={(event) => {
                updateUserName(event.target.value);
              }}
            />
            <label htmlFor="userpassword">Password:</label>
            <input
              type="text"
              id="password"
              onChange={(event) => {
                updateUserPassword(event.target.value);
              }}
            />
            <button>Login</button>
          </form>
        </div>
      )}
    </UserConsumer>
  );
}
