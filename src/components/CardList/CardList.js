import React from 'react';

import './CardList.css';
import CardListItem from '../CardItem/CardListItem';
import CollectionProvider from '../../collectionContext';
const CardList = ({ cards }) => {
  return (
    <CollectionProvider>
      <div
        style={{
          display: 'inline',
          alignItems: 'center'
        }}
      >
        {cards.map((card) => {
          if (card.imageUrl)
            return <CardListItem className="Card" key={card.id} {...card} />;
          else {
            return <p key={card.id}></p>;
          }
        })}
      </div>
    </CollectionProvider>
  );
};

export default CardList;
