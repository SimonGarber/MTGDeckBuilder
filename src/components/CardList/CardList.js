import React, { useContext, Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import './CardList.css';
import CardListItem from '../CardItem/CardListItem';
import { UserContext } from '../../userContext';
const CardList = ({ cards }) => {
  const context = useContext(UserContext);

  return (
    <Grid.Row columns={4}>
      {cards.map((card) => {
        return card.image !== null && card.isModern && context.ismodern ? (
          <CardListItem context={context} key={card.id} card={{ ...card }} />
        ) : card.image !== null && card.isLegacy && context.islegacy ? (
          <CardListItem key={card.id} card={{ ...card }} />
        ) : card.image !== null && card.isCommander && context.iscommander ? (
          <CardListItem key={card.id} card={{ ...card }} />
        ) : card.image !== null && card.isVintage && context.isvintage ? (
          <CardListItem key={card.id} card={{ ...card }} />
        ) : (
          <Fragment />
        );
      })}
    </Grid.Row>
  );
};

export default CardList;
