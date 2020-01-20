import React, { useContext, useEffect } from "react";
import DragItem from "./DeckList/DragItem";
import { Grid, GridImage, GridItem } from "./DeckList/DeckList";
import GridContext from "../stateManagement/GridContext";
import { Context as AuthContext } from "../stateManagement/AuthContext";
import { Context as userCardsContext } from "../stateManagement/userCardsContext";
function Decks() {
  const { items, moveItem } = useContext(GridContext);
  const { getCards } = useContext(userCardsContext);
  const Auth = useContext(AuthContext);
  const userId = Auth.state.userId;

  useEffect(() => {
    getCards({ userId });
  }, []);

  return (
    <div className="App">
      <Grid>
        {items.map(item => (
          <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
            <GridItem>
              <GridImage src={item.image}></GridImage>
            </GridItem>
          </DragItem>
        ))}
      </Grid>
    </div>
  );
}

export default Decks;
