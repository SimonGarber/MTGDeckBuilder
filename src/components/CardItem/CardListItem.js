import React, { Fragment, useState } from 'react';
import { UserConsumer } from '../../userContext';

import { Card, Image, Label } from 'semantic-ui-react';
import './CardItem.css';
import '../CardModal/CardModal.css';

const CardListItem = ({ card }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <UserConsumer>
      {({ updateSavedCards }) => (
        <div>
          <Card
            className="Card"
            bg="primary"
            text="white"
            style={{
              width: '18rem',
              float: 'left'
            }}
          >
            {' '}
            <Card.Header>{card.name}</Card.Header>
            {!show ? (
              <div>
                <Image wrapped ui={false} src={card.image} size="small" />
                <Card.Content>
                  <Card.Description>This is a magic Card</Card.Description>
                </Card.Content>
                <Fragment>
                  <div>
                    <button onClick={handleShow}>Show Details</button>

                    <button
                      id="card"
                      onClick={() => {
                        updateSavedCards(card);
                      }}
                    >
                      Add to Collection
                    </button>
                  </div>
                </Fragment>
              </div>
            ) : (
              <div>
                <button onClick={handleShow}>Hide Details</button>
                <Label as="a" color="blue">
                  <Label.Detail>Modern</Label.Detail>
                  {card.modernLegal}
                </Label>
              </div>
            )}
          </Card>
        </div>
      )}
    </UserConsumer>
  );
};

export default CardListItem;
