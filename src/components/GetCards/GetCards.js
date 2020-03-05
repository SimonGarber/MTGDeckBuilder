import React, { useContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
import { Context as SearchCardsContext } from "../../stateManagement/searchCardsContext";
import NewForm from "../Form/Form";
import SearchCard from "../SearchCard/SearchCard";
import { Grid, Card } from "semantic-ui-react";

const GetCards = () => {
  const { state } = useContext(AuthContext);
  const userCards = useContext(userCardsContext);
  const SearchCards = useContext(SearchCardsContext);
  const cards = userCards.state.cards;
  const handleAddCard = async (state, card) => {
    const { userId } = state;
    const updatedCard = { ...card, inCollection: true };
    await SearchCards.updateSearch(SearchCards.state.cards, updatedCard);
    await userCards.addCard(userId, card);
    userCards.getCards(state);
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };
  useEffect(() => {
    userCards.getCards(state);
  }, [cards.length]);
  return (
    <div>
      <NewForm cards={SearchCards.state.cards} />

      {SearchCards.state.cards.length > 0 && (
        <React.Fragment>
          <Grid centered>
            <Card.Group centered cards={SearchCards.state.cards}>
              <Default>
                {SearchCards.state.cards.map((card, index) => {
                  return (
                    card.set_type !== "memorabilia" && (
                      <SearchCard
                        key={index}
                        imageSize={"normal"}
                        card={card}
                        handleAddCard={handleAddCard}
                        imageWidth={null}
                        cards={cards}
                        auth={state}
                      />
                    )
                  );
                })}
              </Default>

              <Mobile>
                {SearchCards.state.cards.map(card => {
                  return (
                    card.set_type !== "memorabilia" && (
                      <Grid.Row key={card.id}>
                        <SearchCard
                          key={card.id}
                          imageSize={"small"}
                          card={card}
                          handleAddCard={handleAddCard}
                          auth={state}
                          imageWidth={null}
                          cards={cards}
                        />
                      </Grid.Row>
                    )
                  );
                })}
              </Mobile>
            </Card.Group>
          </Grid>
        </React.Fragment>
      )}
    </div>
  );
};

export default GetCards;
