import React, { useState } from 'react';
import CardList from '../CardList/CardList';
const mtg = require('mtgsdk');

const GetCards = (props) => {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');

  const getCardsHandler = (e) => {
    e.preventDefault();
    mtg.card.where({ name: query, pageSize: 5 }).then((results) => {
      setCards(results);
      setQuery('');
    });
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={getCardsHandler}>
        <input onChange={handleChange} type="text" />
        <button type="submit">Get Cards</button>
      </form>
      <CardList value={cards} />
    </div>
  );
};
export default GetCards;
