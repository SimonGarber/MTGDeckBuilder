import React, { useContext, useEffect } from "react";
import DashBoard from "../../DashBoard";
import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
import * as Auth from "../../stateManagement/AuthContext";
const Cards = props => {
  const userCards = useContext(userCardsContext);
  const user = useContext(Auth.Context);

  useEffect(() => {
    userCards.getCards(user.state.userId);
  }, []);
  return (
    <React.Fragment>
      <DashBoard history={props.history} />
      <div>
        <h1>User Cards</h1>

        {userCards.state.cards.map(card => {
          return <h2 key={card.id}>{card.name}</h2>;
        })}
      </div>
    </React.Fragment>
  );
};
export default Cards;
