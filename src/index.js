import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'semantic-ui-react';
import App from './App';

ReactDOM.render(
  <Container
    style={{
      justifyContent: 'center',
      display: 'flex',
      textAlign: 'center',
      position: 'relative',
      width: '100%',
      height: '100%',
      top: '9rem'
    }}
  >
    <App />
  </Container>,
  document.getElementById('root')
);
