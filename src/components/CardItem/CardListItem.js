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

  const popup1 = {
    position: 'fixed',
    top: '300px',
    left: '496px',
    height: '32rem',
    width: '32rem',
    backgroundColor: 'green',
    padding: '2rem',
    border: '5px solid black',
    transform: 'none'
  };
  const popup2 = {
    position: 'relative',
    top: '600px',
    left: '510px',
    height: '32rem',
    width: '32rem',

    transform: 'none',
    display: 'contents'
  };

  const content = (
    <Card
      style={{
        position: 'absolute'
      }}
    >
      <Popup
        position="top right"
        on="click"
        trigger={
          <Image
            src={card.image2}
            style={{
              position: 'relative'
            }}
          />
        }
        style={popup1}
      >
        <Popup.Content>
          <Card>
            <Card.Header>Card Actions</Card.Header>
            <Card.Content>
              <p>
                Aliquip nostrud quis duis esse amet cupidatat consequat minim
                anim. Sunt nulla anim reprehenderit commodo eiusmod dolor tempor
                eu voluptate reprehenderit nulla deserunt. Laboris tempor
                consequat laborum mollit nulla eiusmod consequat est mollit do.
                Ad velit culpa cillum id esse in reprehenderit cillum deserunt
                duis in commodo ex. Nulla esse consectetur aliquip consequat
                quis occaecat fugiat deserunt. Est enim est consequat aute anim
                culpa voluptate ea. Sit anim ea pariatur deserunt deserunt
                veniam reprehenderit irure consequat ipsum consequat veniam
                excepteur do. Veniam amet elit labore velit fugiat est ea
                consectetur labore. Duis id labore voluptate veniam est in. Esse
                incididunt mollit velit dolore irure quis aliqua esse sint anim
                irure. Reprehenderit dolore enim mollit velit consequat minim
                consequat proident id. Officia enim aliquip laboris voluptate.
                Occaecat nisi esse elit occaecat non sint tempor laboris ullamco
                consectetur et. Labore qui fugiat sit sunt nisi veniam enim id
                nisi laboris commodo. In cillum consequat reprehenderit laboris
                magna anim aute excepteur cillum officia officia aliquip.
                Eiusmod enim ea ex dolor quis esse. Anim consequat aute mollit
                pariatur excepteur reprehenderit cillum ipsum est laboris aliqua
                aliquip. Irure ullamco labore excepteur anim sunt est velit sunt
                aute ullamco. Et culpa cupidatat non labore anim. Culpa mollit
                ex ullamco dolor aute cupidatat adipisicing nostrud ex ut. Ad
                eiusmod minim veniam veniam exercitation excepteur velit dolore.
              </p>
            </Card.Content>
          </Card>
        </Popup.Content>
      </Popup>
    </Card>
  );
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
                      style={popup2}
                      on="click"
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
                  </div>
                ) : (
                  <div>
                    <button onClick={handleShow}>Hide Details</button>
                    <Label as={'a'} color="blue">
                      <Label.Detail>Modern</Label.Detail>
                    </Label>
                  </div>
                )}
                <Fragment></Fragment>
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

/* <Popup.Content>
            <div
              style={{
                height: '200px',
                width: '200px',
                top: '100px',
                left: '100px',
                position: 'absolute',
                backgroundColor: 'gray',
                opacity: '10%'
              }}
            >
              <p>{card.name}</p>
              <p>{card.artist}</p>
              <p>{card.setName}</p>
              <p>{card.cardType}</p>
              <p>{card.manaCost}</p>
            </div> 
          </Popup.Content> */

export default CardListItem;
