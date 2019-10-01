import React from 'react';
import { Card } from 'react-bootstrap';
import './CardItem.css';
const CardListItem = (props) => {
  return (
    <div>
      <Card>
        <Card.Title>{props.card.name}</Card.Title>
        <Card.Body>{props.card.artist}</Card.Body>
      </Card>
    </div>
  );
};

export default CardListItem;
