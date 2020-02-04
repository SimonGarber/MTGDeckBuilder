import React from "react";
import StarCityLink from "../components/CustomLink/StarCityLink";
import StarCityFoil from "../components/CustomLink/StarcityFoil";

const CardLinks = ({ card }) => {
  const isMemorabilia = card.set_type.includes("memorabilia");
  const isPromo = card.set_type.includes("promo");
  const setName = card.set_name;
  const isVintage = setName.includes("Vintage", 0);
  const isNonFoil = card.isNonFoil;
  const isFoil = card.isFoil;

  const cardcheck = {
    name: card.name,
    memorabilia: isMemorabilia,
    promo: isPromo,
    vintage: isVintage,
    nonFoil: isNonFoil,
    foil: isFoil
  };

  console.log("cardCheck =>", cardcheck);

  return (
    <React.Fragment>
      <div>
        {!isMemorabilia && !isPromo && !isVintage && isNonFoil ? (
          <StarCityLink card={card} />
        ) : (
          <p>no non-foil printing</p>
        )}
      </div>
      <div>
        {!isMemorabilia && !isPromo && !isVintage && isFoil ? (
          <StarCityFoil card={card} />
        ) : (
          <p>no foil printing</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default CardLinks;
