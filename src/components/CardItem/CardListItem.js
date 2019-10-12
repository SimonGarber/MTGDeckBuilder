import React, { Fragment, useState } from 'react';
import { UserConsumer } from '../../userContext';
import { Card, Col } from 'react-bootstrap';
import './CardItem.css';

const CardListItem = ({ card }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <UserConsumer>
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
                float: 'right'
              }}
            >
              {' '}
              {card.name && <p>card Name :{card.name}</p>}
              <Card.Img
                className="Card-img"
                alt="Card image cap"
                src={card.image}
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
    </UserConsumer>
  );
};

export default CardListItem;
