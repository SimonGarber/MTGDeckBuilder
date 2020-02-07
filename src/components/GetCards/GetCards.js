import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
import { Context as SearchCardsContext } from "../../stateManagement/searchCardsContext";
import DynamicFormOrganizedWithContextHooks from "../DynamicForm/DynamicFormOrganizedWithContextHooks";
import SearchCard from "../SearchCard/SearchCard";
import "../../index.scss";

const GetCards = () => {
  const userCards = useContext(userCardsContext);
  const { state } = useContext(AuthContext);
  const searchCards = useContext(SearchCardsContext);

  const handleAddCard = async (state, card) => {
    const { userId } = state;

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

  return (
    <React.Fragment>
      {searchCards.state.cards.length < 1 ? (
        <DynamicFormOrganizedWithContextHooks />
      ) : null}

      <div>
        {searchCards.state.cards.length > 0 ? (
          <React.Fragment>
            <Default>
              {searchCards.state.cards.map(card => {
                return (
                  <SearchCard
                    card={card}
                    handleAddCard={handleAddCard}
                    state={state}
                    imageWidth={null}
                  />
                );
              })}
            </Default>

            <Mobile>
              {searchCards.state.cards.map(card => {
                return (
                  <SearchCard
                    card={card}
                    handleAddCard={handleAddCard}
                    state={state}
                    imageWidth={"300px"}
                  />
                );
              })}
            </Mobile>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>No Cards to display yet</p>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default GetCards;
