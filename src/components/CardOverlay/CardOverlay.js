import React from 'react';
import { Segment, Card } from 'semantic-ui-react';

const CardOverlay = () => {
  return (
    <Segment
      style={{
        position: 'fixed',
        zIndex: '11',
        left: '13rem',
        top: '9.2rem'
      }}
    >
      <Card
        style={{
          position: 'fixed',
          width: '480px',
          height: '680px',
          backgroundColor: '#BCBEB7',
          border: '2px solid black'
        }}
      >
        <Card.Header></Card.Header>
      </Card>
    </Segment>
  );
};
export default CardOverlay;
