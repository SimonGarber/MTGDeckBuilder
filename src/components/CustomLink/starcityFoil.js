import React from "react";
import stringToSplit from "../../helpers/stringSplit";

const StarCityFoil = props => {
  console.log(props.card);
  const str = "0";
  const str2 = props.card.set;
  const isNewSet = () => {
    if (props.card.set === "thb" || props.card.set === "eld") {
      return true;
    } else {
      return false;
    }
  };

  const isNewSetPromo = () => {
    if (
      isNewSet(props.card) &&
      (props.card.set.contains("promo") ||
        props.card.set_type.contains("promo"))
    ) {
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
        isNewSet && props.card.isPromo ? str2.concat("2") : props.card.set
      }-${
        !isNewSetPromo
          ? props.card.collectionNumber
          : isNewSet && !props.card.isPromo
          ? isTwoDigits(props.card)
            ? str.concat(props.card.collectionNumber)
            : props.card.collectionNumber
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
