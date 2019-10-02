import React, { Fragment } from 'react';
import './Nav.css';
import { Navbar } from 'react-bootstrap';

export default function Nav() {
  return (
    <Fragment>
      <Navbar className="Nav" bg="light" expand="lg">
        <h3>MTG Deckbuilder</h3>
        <div
          style={{
            marginTop: '1.1rem'
          }}
        >
          <form className="Login">
            <input type="text" />
            <button type="submit">Login</button>
          </form>
        </div>
      </Navbar>
    </Fragment>
  );
}
