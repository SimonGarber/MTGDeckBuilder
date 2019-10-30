import React from 'react';
import { UserProvider } from './userContext';

import GetCards from './components/GetCards/GetCards';
import Nav from './components/NavBar/Nav';
import CardOverlay from './components/CardOverlay/CardOverlay';
import SideBar from './components/SideBar/SideBar';
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <div
        style={{
          width: '100%',
          display: 'flex'
        }}
      >
        <Nav />
        <SideBar />
        <CardOverlay />

        <GetCards />
      </div>
    </UserProvider>
  );
};

export default App;
