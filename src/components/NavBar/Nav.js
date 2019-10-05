import React, { useState } from 'react';
import './Nav.css';
import { Navbar } from 'react-bootstrap';
import UserSettings from '../../UserSettings';

const Nav = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const handleLogout = (e) => {
    e.preventDefault();
    setUser('');
  };
  const addUser = (email, password) => {
    const request = new Request(`http://localhost:3001/api/new-user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    fetch(request)
      .then((response) => {
        response.json().then((body) => {
          setUser(body.email);
          setEmail('');
          setPassword('');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar className="Nav" bg="light" expand="lg">
        <h3>MTG Deckbuilder</h3>
        <div
          style={{
            marginTop: '1.1rem'
          }}
        >
          {/* <UserSettings addUser={() => props.addUser} />*/}

          {!user ? (
            <form className="Login">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="password"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addUser(email, password);
                }}
              >
                Login
              </button>
            </form>
          ) : (
            <div>
              Logged in as {user}
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </Navbar>
    </div>
  );
};

export default Nav;
