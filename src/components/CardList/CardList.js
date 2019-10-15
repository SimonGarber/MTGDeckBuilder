import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import './CardList.css';
import CardListItem from '../CardItem/CardListItem';

const CardList = ({ cards }) => {
  const [modern, setModern] = useState(false);
  useEffect(() => {
    if (!modern) {
      setModern(true);
    } else setModern(false);
  }, []);
  return (
    <Grid.Row columns={4}>
      {cards.map((card) => {
        return (
          card.isModern &&
          card.image !== null && (
            <CardListItem key={card.id} card={{ ...card }} />
          )
        );
      })}
    </Grid.Row>
  );
};

export default CardList;
