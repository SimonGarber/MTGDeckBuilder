import React, { useContext, useState } from "react";
import { UserConsumer, UserContext } from "../../stateManagement/userContext";

export default function UserSettings() {
  const [isloggedin, setIsLoggedIn] = useState(false);
  const [activeuser, setActiveUser] = useState("");
  const [adduseractive, setAddUserActive] = useState(false);
  const [getuseractive, setGetUserActive] = useState(false);

  const user = useContext(UserContext);

  const chooseCreateAccount = () => {
    setAddUserActive(true);
  };
  const chooseLogin = () => {
    setGetUserActive(true);
  };
  const handleLogout = () => {
    setActiveUser("");
    setIsLoggedIn("");
    user.updateUserName("");
    user.updateUserPassword("");
  };

  const getUser = username => {
    const request = new Request(
      `http://localhost:3001/api/fetch-user/${username}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }
    );
    fetch(request)
      .then(response => {
        response
          .json()
          .then(response => {
            if (response[0].user_email === username) {
              console.log("Authenticated!");
            } else {
              console.log("There was an error authenticating");
            }
          })
          .then(response => {
            setActiveUser(username);
            setIsLoggedIn(true);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addUser = (username, userpassword) => {
    const request = new Request(`http://localhost:3001/api/new-user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, userpassword })
    });
    fetch(request)
      .then(response => {
        response.json().then(body => {
          setAddUserActive(false);
          setActiveUser(body.username);
          setIsLoggedIn(true);
        });
      })
      .then(() => {
        user.updateUserName("");
        user.updateUserPassword("");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <UserConsumer>
      {({ updateUserName, updateUserPassword }) => (
        <div
          style={{
            float: "right",
            marginRight: "1.1rem"
          }}
        >
          {!isloggedin && getuseractive && !activeuser && !adduseractive && (
            <div>
              <form
                type="submit"
                onSubmit={e => {
                  e.preventDefault();
                  getUser(user.username);
                }}
              >
                <label htmlFor="username">Username:</label>
                <input
                  value={user.username}
                  id="username"
                  type="text"
                  onChange={event => updateUserName(event.target.value)}
                />
                <label htmlFor="userpassword">Password:</label>
                <input
                  value={user.userpassword}
                  type="text"
                  id="userpassword"
                  onChange={event => updateUserPassword(event.target.value)}
                />
                <button>Log in</button>
              </form>
            </div>
          )}
          {!isloggedin && !getuseractive && !activeuser && !adduseractive && (
            <div>
              <button
                style={{
                  marginRight: "5px"
                }}
                onClick={chooseLogin}
              >
                Log into Account
              </button>
              <button onClick={chooseCreateAccount}>Create an Account</button>
            </div>
          )}

          {!isloggedin && !getuseractive && adduseractive && (
            <div>
              <form
                type="submit"
                onSubmit={e => {
                  e.preventDefault();

                  addUser(user.username, user.userpassword, adduseractive);
                }}
              >
                <label htmlFor="username">Username: </label>
                <input
                  value={user.username}
                  type="text"
                  id="username"
                  onChange={event => {
                    updateUserName(event.target.value);
                  }}
                />
                <label htmlFor="userpassword">Password:</label>
                <input
                  value={user.userpassword}
                  type="text"
                  id="userpassword"
                  onChange={event => {
                    updateUserPassword(event.target.value);
                  }}
                />{" "}
                <div>
                  <button>Create Account</button>
                </div>
              </form>
            </div>
          )}

          {isloggedin && !adduseractive && (
            <div
              style={{
                display: "inline-flex"
              }}
            >
              <p>logged in as {activeuser}</p>
              <form
                style={{
                  margin: "auto 1.1rem"
                }}
                type="submit"
                onSubmit={e => {
                  e.preventDefault();
                  handleLogout();
                }}
              >
                <button>logout</button>
              </form>
            </div>
          )}
        </div>
      )}
    </UserConsumer>
  );
}
