import React from 'react';
import { UserProvider } from './userContext';
import { Container } from 'react-bootstrap';
import GetCards from './components/GetCards/GetCards';
import Nav from './components/NavBar/Nav';

const App = () => {
  return (
    <div>
      <UserProvider>
        <Nav />

        <Container
          style={{
            textAlign: 'center'
          }}
        >
          <GetCards
            style={{
              padding: '1rem',
              margin: '10px 10px'
            }}
          />
        </Container>
      </UserProvider>
    </div>
  );
};

export default App;
