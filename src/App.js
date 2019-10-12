import React from 'react';
import { UserProvider } from './userContext';

import GetCards from './components/GetCards/GetCards';
import Nav from './components/NavBar/Nav';

const App = () => {
  return (
    <UserProvider>
      <div
        style={{
          margin: '0 auto',
          padding: '5px',
          width: '100%',
          position: 'absolute'
        }}
      >
        <div
          style={{
            position: 'relative'
          }}
        >
          <Nav />
        </div>
        <div>
          <GetCards
            style={{
              padding: '1rem',
              margin: '5px 5px'
            }}
          />
        </div>
      </div>
    </UserProvider>
  );
};

export default App;
