import React, { Fragment } from 'react';
import { Card, Col } from 'react-bootstrap';
import './CardItem.css';
const CardListItem = ({ ...card }) => {
  return (
    <Fragment>
      <Col sm style={{ flexGrow: 0 }}>
        <Card
          key={card.id}
          style={{
            width: '18rem',
            margin: '16px',
            border: '1px solid black',
            padding: '1rem',
            float: 'left'
          }}
        >
          {/* <Card.Header className="flex-row" as="h5">
            {card.name}
          </Card.Header>
          <Card.Body>{card.artist}</Card.Body>
        <Card.Text>{card.originalText}</Card.Text>*/}
          <Card.Img
            className="Card-img"
            alt="Card image cap"
            src={card.imageUrl}
            width={258}
            height={343}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <button>Add to Deck</button>
            <button>Add to Collection</button>
          </div>
          {/*<Card.Text>{card.flavor}</Card.Text>*/}
        </Card>
      </Col>
    </Fragment>
  );
};

export default CardListItem;
