import React, { useContext } from "react";
import { Card, Image } from "semantic-ui-react";

import { Context as AuthContext } from "../../stateManagement/AuthContext";
import { Context as UserCardsContext } from "../../stateManagement/userCardsContext";
import searchedArray from "../../helpers/checkResult";

const SearchCard = props => {
  const { state } = useContext(AuthContext);
  const userCards = useContext(UserCardsContext);
  const InCollection = searchedArray(props.card.id, userCards.state.cards);
  return (
    <div key={props.card.id}>
      {props.card.oversized ? null : (
        <Card bg="primary" text="white" key={props.card.id}>
          <Image
            key={Math.floor(Math.random())}
            width={props.imageWidth}
            src={`https://img.scryfall.com/cards/normal/front/${
              props.card.id[0]
            }/${props.card.id[1]}/${props.card.id}.jpg?${props.card.id.slice(
              0,
              10
            )}`}
            wrapped
            ui={false}
          />

          {!InCollection ? (
            <Card.Content extra>
              <button onClick={() => props.handleAddCard(state, props.card)}>
                Add Card
              </button>
            </Card.Content>
          ) : (
            <React.Fragment>
              <button
                style={{
                  color: "white",
                  backgroundColor: "Green"
                }}
              >
                In Collection
              </button>
            </React.Fragment>
          )}
        </Card>
      )}
    </div>
  );
};

export default SearchCard;
