import React from 'react';
import './Nav.css';
import { Navbar } from 'react-bootstrap';
import UserSettings from '../../UserSettings';

const Nav = () => {
  return (
    <Navbar className="Nav" bg="light" expand="lg">
      <h3>MTG Deckbuilder</h3>
      <div
        style={{
          marginTop: '1.1rem'
        }}
      >
        <UserSettings />
      </div>
    </Navbar>
  );
};

export default Nav;
