import React from 'react';

import './CardList.css';
import CardListItem from '../CardItem/CardListItem';

// import { UserProvider } from '../../userContext';
const CardList = ({ cards }) => {
  return (
    <div
      style={{
        display: 'inline',
        alignItems: 'center'
      }}
    >
      {cards.map((card) => {
        return (
          <CardListItem className="Card" key={card.id} card={{ ...card }} />
        );
      })}
    </div>
  );
};

export default CardList;
