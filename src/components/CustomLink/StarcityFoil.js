import React from "react";
import stringToSplit from "../../helpers/stringSplit";

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
    if (card.collectionNumber.length < 3) {
      return true;
    } else {
      return false;
    }
  };

  const isNewSetPromo = card => {
    if (isNewSet(card) && card.isPromo) {
      return true;
    }
  };

  return (
    <a
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
          ? str.concat(card.collectionNumber)
          : !isNewSet(card) && isTwoDigits(card)
          ? card.collectionNumber
          : card.collectionNumber
      }-enf`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Link to Foil
    </a>
  );
};

export default StarCityFoil;
