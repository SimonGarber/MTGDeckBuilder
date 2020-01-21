import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DashBoard from "../../DashBoard";
import Portal from "../Portal/Portal";
import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
import * as Auth from "../../stateManagement/AuthContext";
const Cards = props => {
  const userCards = useContext(userCardsContext);
  const user = useContext(Auth.Context);

  useEffect(() => {
    userCards.getCards(user.state.userId);
  });
  return (
    <React.Fragment>
      <DashBoard history={props.history} />
      <Portal>
        <div className="collectionTitle">
          <h1>My Collection</h1>
        </div>
      </Portal>
      <Portal>
        <div className="userCardList">
          {userCards.state.cards.map(card => {
            return (
              <div key={card.id}>
                <h2
                  key={card.id}
                  onClick={() => {
                    userCards.getCard({ card }).then(() => {
                      props.history.push(`cards/${card.id}`);
                    });
                  }}
                >
                  {card.name}
                </h2>
              </div>
            );
          })}
        </div>
      </Portal>
    </React.Fragment>
  );
};
export default Cards;
