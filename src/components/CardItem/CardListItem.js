import React, { useState, Fragment } from 'react';
import { UserConsumer } from '../../userContext';

import { Card, Image, Label, Popup, Button } from 'semantic-ui-react';
import './CardItem.css';

const CardListItem = ({ card }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const popup = {
    transform: 'none'
  };

  const content = (
    <Card>
      <Image src={card.image2} wrapped />
      <Popup
        className="PopupContainer1"
        on="click"
        closeOnDocumentClick={false}
        style={popup}
        position="right center"
        trigger={<Button>press me</Button>}
      >
        <Popup.Content>
          <Card>
            <Card.Header className="PopupCardHeader">
              <Button>Details</Button>
              <Button>Rulings</Button>
              <Button>Price</Button>
            </Card.Header>
            <Card.Content className="PopupCardContent"></Card.Content>
            <Button>Close</Button>
          </Card>
        </Popup.Content>
      </Popup>
    </Card>
  );

  return (
    <div>
      <UserConsumer>
        {(Moderncontext) => (
          <Card className="Card" bg="primary" text="white">
            <Card.Header>{card.name}</Card.Header>
            {!show ? (
              <Fragment>
                <Popup
                  className="PopupContainer2"
                  on="click"
                  closeOnDocumentClick={false}
                  style={popup}
                  trigger={
                    <Image
                      style={{ marginTop: '25vh' }}
                      size="small"
                      src={card.image}
                    />
                  }
                >
                  <Popup.Content> {content}</Popup.Content>
                </Popup>

                <button onClick={handleShow}>Show Details</button>
              </Fragment>
            ) : (
              <Fragment>
                <button onClick={handleShow}>Hide Details</button>
                <Label as="a" color="blue" tag={true}>
                  <Label.Detail>Modern</Label.Detail>
                </Label>
              </Fragment>
            )}
          </Card>
        )}
      </UserConsumer>
    </div>
  );
};
export default CardListItem;
