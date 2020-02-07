import React, { useContext } from "react";
import { Card, Image } from "semantic-ui-react";
import CardLinks from "../../helpers/cardCheck";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
const SearchCard = ({ card, handleAddCard, imageWidth }) => {
  const { state } = useContext(AuthContext);
  return (
    <div key={card.id}>
      {card.oversized ? null : (
        <Card bg="primary" text="white" key={card.id}>
          <Image
            key={Math.floor(Math.random())}
            width={imageWidth}
            src={`https://img.scryfall.com/cards/normal/front/${card.id[0]}/${
              card.id[1]
            }/${card.id}.jpg?${card.id.slice(0, 10)}`}
            wrapped
            ui={false}
          />

          {!card.in_Collection ? (
            <Card.Content extra>
              <button onClick={() => handleAddCard({ state, card })}>
                Add Card
              </button>
              <CardLinks card={card} />
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
              <CardLinks card={card} />
            </React.Fragment>
          )}
        </Card>
      )}
    </div>
  );
};

export default SearchCard;
