import React from 'react';
import { UserProvider } from './userContext';

import GetCards from './components/GetCards/GetCards';
import Nav from './components/NavBar/Nav';

const App = () => {
  return (
    <UserProvider>
      <Nav />
      <GetCards
        style={{
          padding: '1rem',
          margin: '10px 10px'
        }}
      />
    </UserProvider>
  );
};

export default App;
