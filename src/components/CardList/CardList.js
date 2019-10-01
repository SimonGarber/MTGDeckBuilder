import React from 'react';

import CardListItem from '../CardItem/CardListItem';
const CardList = (props) => {
  return (
    <div>
      <h2>This is the card list</h2>
      <CardListItem value={props.value}></CardListItem>
    </div>
  );
};

export default CardList;
