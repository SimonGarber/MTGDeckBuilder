import React, { useState } from 'react';
import CardList from '../CardList/CardList';
import './GetCards.css';
import { Container, Row } from 'react-bootstrap';

const mtg = require('mtgsdk');

const GetCards = () => {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');

  const getCardsHandler = (e) => {
    e.preventDefault();
    mtg.card.where({ name: `"${query}"`, pageSize: 100 }).then((results) => {
      setCards(results);
      setQuery('');
    });
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div
      style={{
        justifyContent: 'center'
      }}
    >
      <form
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
        onSubmit={getCardsHandler}
      >
        <input
          className="search-heading"
          value={query}
          onChange={handleChange}
          type="text"
        />
        <button type="submit">Get Cards</button>
      </form>
      <Container className="gallery-view">
        <Row>
          <CardList className="Card-Container" cards={cards} />
        </Row>
      </Container>
    </div>
  );
};
export default GetCards;
