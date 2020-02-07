import React from "react";
import StarCityLink from "../components/CustomLink/StarCityLink";
import StarCityFoil from "../components/CustomLink/StarcityFoil";

// This function takes the card objects that are being rendered to the app from the search
// Query and runs a check to see what links should be included depending on whether or not
// there is a valid link being processed.
// This component is rendered as either a starcity link or a star city foil link

const CardLinks = ({ card }) => {
  function containsOnly(arr1, arr2) {
    return arr2.every(elem => arr1.includes(elem));
  }

  const gamesArray = ["mtgo"];
  // ongoing issue with this check when the link is rendered to a user card collectoin
  // when the list is first rendered

  const isMemorabilia = card.set_type.includes("memorabilia", 0) ? true : false;
  const isPromo = card.set_type.includes("promo", 0);
  const isFunny = card.set_type.includes("funny", 0);

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
