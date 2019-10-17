// import React, { useState } from 'react';
// import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';

// const CardModal = ({ card }) => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => {
//     setShow(false);
//   };
//   return (
//     <Modal
//       open={show}
//       trigger={
//         <Button
//           onClick={() => {
//             setShow(true);
//           }}
//         >
//           Scrolling Content Modal
//         </Button>
//       }
//       style={{
//         top: '0',
//         left: '0',
//         margin: '0, auto',
//         position: 'absolute',
//         backgroundColor: 'aliceblue',
//         maxWidth: '50%',
//         maxheight: '50%'
//       }}
//     >
//       <Modal.Header>Card Image</Modal.Header>
//       <Modal.Content image scrolling>
//         <Image wrapped size="medium" src={card.image} />
//         <Modal.Description>
//           <Header>{card.name}</Header>
//           <p>
//             Card Data
//           </p>
//         </Modal.Description>
//       </Modal.Content>
//       <Modal.Actions>
//         <Button onClick={handleClose} primary>
//           close <Icon name="right chevron" />
//         </Button>
//       </Modal.Actions>
//     </Modal>
//   );
// };

// export default CardModal;
