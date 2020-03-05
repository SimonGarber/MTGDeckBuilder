import React from "react";
import stringToSplit from "../../helpers/stringSplit";
import { Button } from "semantic-ui-react";

// Imports the Card objects returned from a search query and
// creates a customized URL string that conforms to the URL structure
// for generating working star city games card links for nonFoil versions

const StarCityLink = ({ card }) => {
  const str = "0";
  const str2 = card.set;
  const isNewSet = () => {
    if (str2 === "thb" || str2 === "eld") {
      return true;
    } else {
      return false;
    }
  };
  const isMasterPiece = card => {
    if (card.set_type[0] === "masterpiece") {
      return true;
    } else {
      return false;
    }
  };
  const isTwoDigits = () => {
    if (card.collector_number.length < 3) {
      return true;
    } else {
      return false;
    }
  };

  const isNewSetPromo = card => {
    if (isNewSet(card) && card.promo) {
      return true;
    }
  };

  return (
    <Button
      disabled={!card.nonfoil}
      as="a"
      href={`https://starcitygames.com/${stringToSplit(card.name)}-sgl-mtg-${
        isNewSetPromo(card)
          ? str2.concat("2")
          : isMasterPiece(card)
          ? str2.concat("2")
          : isNewSet(card)
          ? card.set
          : card.set
      }-${
        isNewSet(card) && isTwoDigits(card)
          ? str.concat(card.collector_number)
          : !isNewSet(card) && isTwoDigits(card)
          ? card.collector_number
          : card.collector_number
      }-enn`}
      target="_blank"
      rel="noopener noreferrer"
      inverted
      color="blue"
    >
      Non Foil
    </Button>
  );
};

export default StarCityLink;
