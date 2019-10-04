import React from 'react';
import { UserConsumer } from './userContext';

export default function UserSettings() {
  return (
    <UserConsumer>
      {({ updateUserName, updateUserPassword }) => (
        <div
          style={{
            float: 'right'
          }}
        >
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
        </div>
      )}
    </UserConsumer>
  );
}
