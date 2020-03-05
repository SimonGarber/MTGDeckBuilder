import React, { useContext, useEffect } from "react";
import { Grid, Button, Card, Image } from "semantic-ui-react";
import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
import { Context as SearchContext } from "../../stateManagement/searchCardsContext";
import StarCityLink from "../CustomLink/StarCityLink";
import StarCityFoil from "../CustomLink/StarcityFoil";
import "./Cards.css";

const UserCardList = props => {
  const userCards = useContext(userCardsContext);
  const SearchCards = useContext(SearchContext);
  const { state } = useContext(AuthContext);

  const handleRemoveCard = async (state, card) => {
    // creating a UI friendly indication that a card has been deleted from the user collection
    // with conditions for if the car being deleted is in the search cards state or not
    const updatedCard = { ...card, inCollection: false };
    if (SearchCards.state.cards.find(el => el.id === card.id) !== undefined) {
      await SearchCards.updateSearch(SearchCards.state.cards, updatedCard);
      await userCards.removeCard({ state, card });
    } else {
      await userCards.removeCard({ state, card });
    }
  };

  useEffect(() => {
    userCards.getCards(state);
  }, []);
  return (
    <React.Fragment>
      <Grid centered>
        <Card.Group centered>
          {userCards.state.cards.length > 0 &&
            userCards.state.cards.map(card => {
              return (
                <Card key={card.id}>
                  <Card.Content>
                    <Image
                      src={card.image_uris.normal}
                      onClick={() =>
                        userCards.getCard(card).then(() => {
                          props.history.push(`cards/${card.id}`);
                        })
                      }
                    />
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui 3 buttons">
                      <Button
                        inverted
                        color="red"
                        onClick={() => {
                          handleRemoveCard(state, card);
                        }}
                      >
                        Delete
                      </Button>
                      <StarCityLink card={card} />
                      <StarCityFoil card={card} />
                    </div>
                  </Card.Content>
                </Card>
              );
            })}
        </Card.Group>
      </Grid>
    </React.Fragment>
  );
};

export default UserCardList;
