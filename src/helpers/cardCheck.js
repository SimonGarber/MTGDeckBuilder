import React from "react";
import StarCityLink from "../components/CustomLink/StarCityLink";
import StarCityFoil from "../components/CustomLink/StarcityFoil";

const CardLinks = ({ card }) => {
  function containsOnly(arr1, arr2) {
    return arr2.every(elem => arr1.includes(elem));
  }

  const gamesArray = ["mtgo"];
  const isMemorabilia = card.set_type.includes("memorabilia", 0) ? true : false;
  const isPromo = card.set_type.includes("promo");
  const isFunny = card.set_type.includes("funny");

  const checkedCardNonFoil = card => {
    if (
      !containsOnly(gamesArray, card.games) &&
      !isMemorabilia &&
      !isPromo &&
      !isFunny &&
      card.isNonFoil
    ) {
      return true;
    } else {
      return false;
    }
  };

  const checkedCardFoil = card => {
    if (
      !containsOnly(gamesArray, card.games) &&
      !isMemorabilia &&
      !isPromo &&
      !isFunny &&
      card.isFoil
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <React.Fragment>
      {checkedCardNonFoil(card) && (
        <div>
          <StarCityLink card={card} key={card.id} />
        </div>
      )}

      {!checkedCardNonFoil(card) && (
        <div>
          <p>no non-foil printing</p>
        </div>
      )}

      {checkedCardFoil(card) && (
        <div>
          <StarCityFoil card={card} key={card.id} />
        </div>
      )}

      {!checkedCardFoil(card) && (
        <div>
          <p>no foil printing</p>
        </div>
      )}
      {!checkedCardFoil(card) && !checkedCardNonFoil(card) && (
        <div>
          <p>no pricing information</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default CardLinks;
