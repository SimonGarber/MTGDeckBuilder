import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import DashBoard from "../DashBoard/DashBoard";
import Portal from "../Portal/Portal";
import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
import StarCityLink from "../CustomLink/StarCityLink";
import StarCityFoil from "../CustomLink/starcityFoil";
const Cards = props => {
  const userCards = useContext(userCardsContext);
  const { state } = useContext(AuthContext);

  useEffect(() => {
    userCards.getCards(state);
  }, []);
  return (
    <React.Fragment>
      <DashBoard history={props.history} />
      <Portal>
        <div className="collectionTitle">
          <h1>My Collection</h1>
        </div>
      </Portal>
      <Portal>
        <Grid.Column className="userCardList">
          {userCards.state.cards.map(card => {
            return (
              <Grid.Row
                key={card.id}
                style={{
                  border: "2px solid black",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: "10px"
                }}
              >
                <div>
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
                <div>
                  <h3
                    onClick={() => {
                      userCards.removeCard({ state, card });
                    }}
                  >
                    Delete
                  </h3>
                  <div>
                    {card.isNonFoil ? (
                      <StarCityLink card={card} />
                    ) : (
                      <p>Non Non-foil Printing</p>
                    )}
                  </div>
                  <div>
                    {card.isFoil === true ? (
                      <StarCityFoil card={card} />
                    ) : (
                      <p>No Foil Printing</p>
                    )}
                  </div>
                </div>
              </Grid.Row>
            );
          })}
        </Grid.Column>
      </Portal>
    </React.Fragment>
  );
};
export default Cards;
