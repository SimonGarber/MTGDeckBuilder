import React, { useState, Fragment } from 'react';
import { UserConsumer } from '../../userContext';

import {
  Button,
  Header,
  Icon,
  Card,
  Image,
  Label,
  Modal,
  Popup,
  PopupContent
} from 'semantic-ui-react';
import './CardItem.css';

const CardModal = (props) => {
  console.log(props);
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => {
    setModalShow(false);
  };
  return (
    <Modal
      className="modal-wrapper"
      open={modalShow}
      trigger={
        <Button
          onClick={() => {
            setModalShow(true);
          }}
        >
          Scrolling Content Modal
        </Button>
      }
    >
      <Modal.Header>Card Image</Modal.Header>
      <Modal.Content>
        <Image size="small" src={props.card.image} wrapped />
        <Modal.Description>
          <Header>{props.card.name}</Header>
          <p>Card Data</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClose} primary>
          close <Icon name="right chevron" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

const CardListItem = ({ card }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const trigger = <Button>Popup</Button>;
  const content = <Image src={card.image2} />;
  return (
    <div>
      <Fragment>
        <UserConsumer>
          {(Moderncontext) => (
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
                <Card.Header>{card.name}</Card.Header>
                {!show ? (
                  <div>
                    <Popup
                      on="click"
                      trigger={<Image size="medium" src={card.image} />}
                    >
                      <Popup.Content>{content}</Popup.Content>
                    </Popup>

                    <Card.Content>
                      <Card.Description>This is a magic Card</Card.Description>
                    </Card.Content>
                    <button onClick={handleShow}>Show Details</button>
                  </div>
                ) : (
                  <div>
                    <button onClick={handleShow}>Hide Details</button>
                    <Label as={'a'} color="blue">
                      <Label.Detail>Modern</Label.Detail>
                    </Label>
                  </div>
                )}
                <Fragment>
                  <CardModal card={{ ...card }} />
                </Fragment>
              </Card>
            </div>
          )}
        </UserConsumer>
      </Fragment>
    </div>
  );
};
// Moderncontext.iscommander && card.isCommander && (
//   <Card
//     className="Card"
//     bg="primary"
//     text="white"
//     style={{
//       width: '18rem',
//       float: 'left'
//     }}
//   >
//     {' '}
//     <Card.Header>{card.name}</Card.Header>
//     {!show ? (
//       <div>
//         <Image wrapped ui={false} src={card.image} size="small" />
//         <Card.Content>
//           <Card.Description>
//             This is a magic Card
//           </Card.Description>
//         </Card.Content>
//       </div>
//     ) : (
//       <div>
//         <button onClick={handleShow}>Hide Details</button>
//         <Label as="a" color="blue">
//           <Label.Detail>Modern</Label.Detail>
//         </Label>
//       </div>
//     )}
//   </Card>
// )

// Moderncontext.islegacy && card.isLegacy && (
//   <Card
//     className="Card"
//     bg="primary"
//     text="white"
//     style={{
//       width: '18rem',
//       float: 'left'
//     }}
//   >
//     {' '}
//     <Card.Header>{card.name}</Card.Header>
//     {!show ? (
//       <div>
//         <Image wrapped ui={false} src={card.image} size="small" />
//         <Card.Content>
//           <Card.Description>
//             This is a magic Card
//           </Card.Description>
//         </Card.Content>
//       </div>
//     ) : (
//       <div>
//         <button onClick={handleShow}>Hide Details</button>
//         <Label as="a" color="blue">
//           <Label.Detail>Modern</Label.Detail>
//         </Label>
//       </div>
//     )}
//   </Card>
// )

// Moderncontext.isvintage && card.isVintage && (
//   <Card
//     className="Card"
//     bg="primary"
//     text="white"
//     style={{
//       width: '18rem',
//       float: 'left'
//     }}
//   >
//     {' '}
//     <Card.Header>{card.name}</Card.Header>
//     {!show ? (
//       <div>
//         <Image wrapped ui={false} src={card.image} size="small" />
//         <Card.Content>
//           <Card.Description>
//             This is a magic Card
//           </Card.Description>
//         </Card.Content>
//       </div>
//     ) : (
//       <div>
//         <button onClick={handleShow}>Hide Details</button>
//         <Label as="a" color="blue">
//           <Label.Detail>Modern</Label.Detail>
//         </Label>
//       </div>
//     )}
//   </Card>
// )

export default CardListItem;
