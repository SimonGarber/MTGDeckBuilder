import React, { useState, Fragment } from 'react';
import { UserConsumer } from '../../userContext';

import { Card, Image, Label, Popup, Button } from 'semantic-ui-react';
import './CardItem.css';

const CardListItem = ({ card }) => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleShow = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const handleOpenPopup = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const popup1 = {
    position: 'fixed',
    top: '9rem',
    left: '43rem',
    height: '20rem',
    width: '70%',
    backgroundColor: 'green',
    padding: '2rem',
    border: '5px solid black',
    transform: 'none',
    display: 'flex',
    zIndex: '15'
  };

  const popup2 = {
    right: 'auto',
    top: '9rem',
    left: '13rem',
    height: '32rem',
    width: '32rem',
    transform: 'none',
    position: 'fixed',
    zIndex: '15'
  };

  const content = (
    <Card>
      <Image src={card.image2} wrapped />
      <Popup
        on="click"
        closeOnDocumentClick={false}
        style={popup1}
        position="right center"
        trigger={<Button>press me</Button>}
      >
        <Popup.Content>
          <Card>
            <Card.Header
              style={{
                border: '1px solid black',
                backgroundColor: 'gray'
              }}
            >
              <Button>Details</Button>
              <Button>Rulings</Button>
              <Button>Price</Button>
            </Card.Header>
            <Card.Content
              style={{
                border: '1px solid black',
                backgroundColor: '#F9FEE1',
                padding: '1em'
              }}
            >
              Aliquip nostrud quis duis esse amet cupidatat consequat minim
              anim. Sunt nulla anim reprehenderit commodo eiusmod dolor tempor
              eu voluptate reprehenderit nulla deserunt. Laboris tempor
              consequat laborum mollit nulla eiusmod consequat est mollit do. Ad
              velit culpa cillum id esse in reprehenderit cillum deserunt duis
              in commodo ex. Nulla esse consectetur aliquip consequat quis
              occaecat fugiat deserunt. Est enim est consequat aute anim culpa
              voluptate ea. Sit anim ea pariatur deserunt deserunt veniam
              reprehenderit irure consequat ipsum consequat veniam excepteur do.
              Veniam amet elit labore velit fugiat est ea consectetur labore.
              Duis id labore voluptate veniam est in. Esse incididunt mollit
              velit dolore irure quis aliqua esse sint anim irure. Reprehenderit
              dolore enim mollit velit consequat minim consequat proident id.
              Officia enim aliquip laboris voluptate. Occaecat nisi esse elit
              occaecat non sint tempor laboris ullamco consectetur et. Labore
              qui fugiat sit sunt nisi veniam enim id nisi laboris commodo. In
              cillum consequat reprehenderit laboris magna anim aute excepteur
              cillum officia officia aliquip. Eiusmod enim ea ex dolor quis
              esse. Anim consequat aute mollit pariatur excepteur reprehenderit
              cillum ipsum est laboris aliqua aliquip. Irure ullamco labore
              excepteur anim sunt est velit sunt aute ullamco. Et culpa
              cupidatat non labore anim. Culpa mollit ex ullamco dolor aute
              cupidatat adipisicing nostrud ex ut. Ad eiusmod minim veniam
              veniam exercitation excepteur velit dolore.
            </Card.Content>
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
          <Card
            className="Card"
            bg="primary"
            text="white"
            style={{
              width: '18rem',
              float: 'left'
            }}
          >
            <Card.Header>{card.name}</Card.Header>
            {!show ? (
              <Fragment>
                <Popup
                  on="click"
                  closeOnDocumentClick={false}
                  style={popup2}
                  trigger={<Image size="medium" src={card.image} />}
                >
                  <Popup.Content
                    style={{
                      position: 'fixed'
                    }}
                  >
                    {' '}
                    {content}
                  </Popup.Content>
                </Popup>

                <Card.Content>
                  <Card.Description>This is a magic Card</Card.Description>
                </Card.Content>

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
