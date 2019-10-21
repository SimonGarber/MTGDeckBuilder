import React from 'react';
import { Segment, Card } from 'semantic-ui-react';
import './CardDashBoard.css';
const CardDashBoard = () => {
  return (
    <Segment className="dashboard">
      <Card
        style={{
          position: 'fixed',
          width: '480px',
          height: '680px',
          backgroundColor: 'red'
        }}
      ></Card>
      <Card className="card">
        <Card.Header>This is a dashboard component</Card.Header>
      </Card>
    </Segment>
  );
};

export default CardDashBoard;
