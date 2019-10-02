import React from 'react';
import GetCards from './components/GetCards/GetCards';
import Nav from './components/NavBar/Nav';
function App() {
  return (
    <div
      style={{
        margin: '0 auto',
        padding: '5px'
      }}
    >
      <Nav />

      <div style={{}}>
        <GetCards
          style={{
            padding: '1rem',
            margin: '5px 5px'
          }}
        />
      </div>
    </div>
  );
}

export default App;
