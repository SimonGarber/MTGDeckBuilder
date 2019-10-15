import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import './CardList.css';
import CardListItem from '../CardItem/CardListItem';
import { UserContext } from '../../userContext';
const CardList = ({ cards }) => {
  const context = useContext(UserContext);

  return (
    <Grid.Row columns={4}>
      {cards.map((card) => {
        return (
          card.image !== null && (
            <CardListItem key={card.id} card={{ ...card }} />
          )
        );
      })}
    </Grid.Row>
  );
};

export default CardList;
