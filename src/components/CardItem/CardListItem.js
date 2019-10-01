import React from 'react';
import { Card } from 'react-bootstrap';
import './CardItem.css';
const CardListItem = ({ ...card }) => {
  return (
    <div>
      <Card className="Card-Container">
        <Card.Header>{card.name}</Card.Header>
        <Card.Body>{card.artist}</Card.Body>
        <Card.Text>{card.originalText}</Card.Text>
        <Card.Img src={card.imageUrl} />
      </Card>
    </div>
  );
};

export default CardListItem;
