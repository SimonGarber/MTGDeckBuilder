import React from 'react';
import { UserProvider } from './userContext';
import CardDashBoard from './components/CardDashboard/CardDashBoard';
import GetCards from './components/GetCards/GetCards';
import Nav from './components/NavBar/Nav';
import CardOverlay from './components/CardOverlay/CardOverlay';

const App = () => {
  return (
    <UserProvider>
      <Nav />
      <CardOverlay />
      <CardDashBoard />
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
