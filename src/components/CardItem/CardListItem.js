import React, { useState, useContext, Fragment } from 'react';
import { UserConsumer, UserContext } from '../../userContext';

import { Card, Image, Label } from 'semantic-ui-react';
import './CardItem.css';
import '../CardModal/CardModal.css';

const CardListItem = ({ card }) => {
  const [show, setShow] = useState(false);
  const Moderncontext = useContext(UserContext);
  const handleShow = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div>
      <Fragment>
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
              {' '}
              <Card.Header>{card.name}</Card.Header>
              {!show ? (
                <div>
                  <Image wrapped ui={false} src={card.image} size="small" />
                  <Card.Content>
                    <Card.Description>This is a magic Card</Card.Description>
                  </Card.Content>
                </div>
              ) : (
                <div>
                  <button onClick={handleShow}>Hide Details</button>
                  <Label as="a" color="blue">
                    <Label.Detail>Modern</Label.Detail>
                  </Label>
                </div>
              )}
            </Card>
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
