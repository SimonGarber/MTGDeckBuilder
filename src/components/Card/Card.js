import React, { useContext } from "react";
import DashBoard from "../../DashBoard";
import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
const Card = ({ match, history }) => {
  const { state } = useContext(userCardsContext);
  const card = state.cards.find(card => match.params.cardId === card.id);

  return (
    <React.Fragment>
      {match.isExact && (
        <React.Fragment>
          <DashBoard history={history} />
          <div>
            <h1>{card.name}</h1>
            <img src={card.image[0].image2} />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Card;
