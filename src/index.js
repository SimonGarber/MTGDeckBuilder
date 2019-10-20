import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'semantic-ui-react';
import App from './App';

ReactDOM.render(
  <Container
    style={{
      justifyContent: 'center',
      display: 'flex',
      textAlign: 'center'
    }}
  >
    <App />
  </Container>,
  document.getElementById('root')
);
