import React from 'react';
import { Segment, Card } from 'semantic-ui-react';
import './CardDashBoard.css';
const CardDashBoard = () => {
  return (
    <Segment className="dashboard">
      <Card className="CardContainer"></Card>
      <Card className="card">
        <Card.Header>This is a dashboard component</Card.Header>
      </Card>
    </Segment>
  );
};

export default CardDashBoard;
