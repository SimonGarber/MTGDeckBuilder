import React, { useContext, memo, useState, useEffect } from "react";
import { Card, Image, Button, Label } from "semantic-ui-react";
import StarCityLink from "../CustomLink/StarCityLink";
import StarCityFoil from "../CustomLink/StarcityFoil";

const SearchCard = ({ auth, card, imageWidth, imageSize, handleAddCard }) => {
  return (
    <div>
      {card.oversized ? null : (
        <Card>
          <Card.Content>
            <Image
              key={Math.floor(Math.random())}
              width={imageWidth}
              src={`https://img.scryfall.com/cards/${imageSize}/front/${
                card.id[0]
              }/${card.id[1]}/${card.id}.jpg?${card.id.slice(0, 10)}`}
            />
          </Card.Content>

          <Card.Content extra>
            <div className="ui 3 buttons">
              <Button
                disabled={card.inCollection}
                inverted
                color="green"
                onClick={() => handleAddCard(auth, card)}
              >
                {card.inCollection ? "In Collection" : "Add Card"}
              </Button>
              <StarCityLink card={card} />
              <StarCityFoil card={card} />
            </div>
          </Card.Content>
        </Card>
      )}
    </div>
  );
};

export default SearchCard;
