import React from "react";
import stringToSplit from "../../helpers/stringSplit";

const StarCityFoil = props => {
  const str = "0";
  const str2 = props.card.set;
  const isNewSet = () => {
    if (str2 === "thb" || str2 === "eld") {
      return true;
    } else {
      return false;
    }
  };

  const isTwoDigits = () => {
    if (props.card.collectionNumber.length < 3) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <a
      href={`https://starcitygames.com/${stringToSplit(
        props.card.name
      )}-sgl-mtg-${
        isNewSet(props.card) && props.card.isPromo
          ? str2.concat("2")
          : props.card.set
      }-${
        isNewSet(props.card) && isTwoDigits(props.card)
          ? str.concat(props.card.collectionNumber)
          : !isNewSet(props.card) && isTwoDigits(props.card)
          ? props.card.collectionNumber
          : props.card.collectionNumber
      }-enf`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Link to Foil
    </a>
  );
};

export default StarCityFoil;
