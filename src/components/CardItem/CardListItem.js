import React, { Fragment } from 'react';
import { CollectionConsumer } from '../../collectionContext';
import { Card, Col } from 'react-bootstrap';
import './CardItem.css';

const CardListItem = ({ ...card }) => {
  return (
    <CollectionConsumer>
      {({ updateSavedCards }) => (
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
                <button
                  id="card"
                  onClick={() => {
                    updateSavedCards(card);
                  }}
                >
                  Add to Collection
                </button>
              </div>
            </Card>
          </Col>
        </Fragment>
      )}
    </CollectionConsumer>
  );
};

export default CardListItem;
