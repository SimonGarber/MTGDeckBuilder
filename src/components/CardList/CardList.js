import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import './CardList.css';
import CardListItem from '../CardItem/CardListItem';
import { UserContext } from '../../userContext';
const CardList = ({ cards }) => {
  const context = useContext(UserContext);

  return (
    <Grid.Row centered className="CardListRow">
      {cards.map((card) => {
        return card.image !== null && card.isModern && context.ismodern ? (
          <CardListItem key={card.id} card={{ ...card }} />
        ) : card.image !== null && card.isLegacy && context.islegacy ? (
          <CardListItem key={card.id} card={{ ...card }} />
        ) : card.image !== null && card.isCommander && context.iscommander ? (
          <CardListItem key={card.id} card={{ ...card }} />
        ) : card.image !== null && card.isVintage && context.isvintage ? (
          <CardListItem key={card.id} card={{ ...card }} />
        ) : card.image !== null &&
          !context.ismodern &&
          !context.isvintage &&
          !context.iscommander &&
          !context.islegacy ? (
          <CardListItem key={card.id} card={{ ...card }} />
        ) : null;
      })}
    </Grid.Row>
  );
};

export default CardList;
