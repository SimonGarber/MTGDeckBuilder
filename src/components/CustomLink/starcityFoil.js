import React from "react";
import stringToSplit from "../../helpers/stringSplit";

const StarCityFoil = props => {
  const isFoil = () => {
    if (props.card.isFoil === true) {
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
      Link to Foil
    </a>
  );
};

export default StarCityFoil;
