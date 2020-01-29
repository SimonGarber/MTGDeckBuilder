import React from "react";
import stringToSplit from "../../helpers/stringSplit";

const StarCityLink = props => {
  const isFoil = someCard => {
    if (someCard.isFoil) {
      return "enf";
    } else {
      return "enn";
    }
  };
  return (
    <a
      href={`https://starcitygames.com/${stringToSplit(
        props.card.name
      )}-sgl-mtg-${props.card.set}-${props.card.collectionNumber}-${isFoil(
        props.card
      )}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Link to Star City Games
    </a>
  );
};

export default StarCityLink;
