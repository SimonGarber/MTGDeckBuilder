import React, { useContext } from "react";
import DashBoard from "../DashBoard/DashBoard";
import Portal from "../Portal/Portal";
import { useMediaQuery } from "react-responsive";
import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
import { Card, Image } from "semantic-ui-react";
import "../../index.scss";
const UserCard = ({ match, history }) => {
  const { state } = useContext(userCardsContext);
  const card = state.cards.find(card => match.params.cardId === card.id);
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };
  return (
    <div>
      {match.isExact && (
        <div>
          <DashBoard history={history} />

          <Default>
            <Card className="Card">
              <h1>{card.name}</h1>
              <Image
                src={`https://img.scryfall.com/cards/normal/front/${
                  card.id[0]
                }/${card.id[1]}/${card.id}.jpg?${card.id.slice(0, 10)}`}
                wrapped
                ui={false}
              />
            </Card>
          </Default>

          <Mobile>
            <Card className="Card">
              <h1>{card.name}</h1>
              <Image
                width="300px"
                src={`https://img.scryfall.com/cards/normal/front/${
                  card.id[0]
                }/${card.id[1]}/${card.id}.jpg?${card.id.slice(0, 10)}`}
                wrapped
                ui={false}
              />
            </Card>
          </Mobile>
        </div>
      )}
    </div>
  );
};

export default UserCard;
