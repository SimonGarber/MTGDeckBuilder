import React from 'react';

import CardListItem from '../CardItem/CardListItem';
const CardList = (props) => {
  return (
    <div>
      <h2>This is the card list</h2>
      {props.cards.map((card) => (
        <CardListItem
          style={{ height: 400, width: 400 }}
          card={props.cards}
          key={card.id}
        />
      ))}
    </div>
  );
};

export default CardList;
