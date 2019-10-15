import React from 'react';
import { Card, Modal } from 'react-bootstrap';
import './CardModal.css';

const CardModal = ({ show, hide }) => {
  return (
    <Modal show={show} hide={hide}>
      <Modal.Header>
        <Modal.Title>Card Info</Modal.Title>
      </Modal.Header>
      <Card>
        <p>Card Type</p>
        <p>Artist</p>
        <p>Rules Text</p>
        <button onClick={hide}>Close</button>
      </Card>
    </Modal>
  );
};

export default CardModal;
