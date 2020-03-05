import React from "react";
import stringToSplit from "../../helpers/stringSplit";
import { Button } from "semantic-ui-react";
// Imports the Card objects returned from a search query and
// creates a customized URL string that conforms to the URL structure
// for generating working star city games card links for foil versions

const StarCityFoil = ({ card }) => {
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
    const str4 = card.set_name;
    if (str4.includes("Inventions")) {
      return true;
    } else {
      return false;
    }
  };

  const isInvocation = card => {
    const str3 = card.set_name;
    if (str3.includes("Invocations", 0)) {
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
      disabled={!card.foil}
      as="a"
      href={`https://starcitygames.com/${stringToSplit(card.name)}-sgl-mtg-${
        isNewSetPromo(card)
          ? str2.concat("2")
          : isMasterPiece(card)
          ? str2.concat("2")
          : isNewSet(card)
          ? card.set
          : isInvocation(card)
          ? str2.replace("mp2", "mps3")
          : card.set
      }-${
        isNewSet(card) && isTwoDigits(card)
          ? str.concat(card.collector_number)
          : !isNewSet(card) && isTwoDigits(card)
          ? card.collector_number
          : card.collector_number
      }-enf`}
      target="_blank"
      rel="noopener noreferrer"
      inverted
      color="purple"
    >
      Foil
    </Button>
  );
};

export default StarCityFoil;
