import React from 'react';
import { Segment, Card } from 'semantic-ui-react';

const CardOverlay = () => {
  return (
    <Segment className="container">
      <Card className="card">
        <Card.Header></Card.Header>
      </Card>
    </Segment>
  );
};
export default CardOverlay;
