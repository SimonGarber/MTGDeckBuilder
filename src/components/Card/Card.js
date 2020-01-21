import React, { useContext } from "react";
import DashBoard from "../../DashBoard";
import { useMediaQuery } from "react-responsive";
import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
import { Card, Image } from "semantic-ui-react";
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
    <React.Fragment>
      {match.isExact && (
        <React.Fragment>
          <DashBoard history={history} />
          <Default>
            <Card>
              <Image src={card.image[0].image2} wrapped ui={false} />
            </Card>
          </Default>
          <Mobile>
            <Card>
              <h1>{card.name}</h1>
              <Image src={card.image[2].image3} wrapped ui={false} />
            </Card>
          </Mobile>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default UserCard;
