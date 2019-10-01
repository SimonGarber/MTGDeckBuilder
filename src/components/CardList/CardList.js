import React from 'react';

import CardListItem from '../CardItem/CardListItem';
const CardList = ({ cards }) => {
  return (
    <div>
      <h2>This is the card list</h2>

      {cards.map((card) => {
        if (card.imageUrl) return <CardListItem key={card.id} {...card} />;
        else {
          return <p></p>;
        }
      })}
    </div>
  );
};

export default CardList;
