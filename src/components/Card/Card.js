import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
import styled from "styled-components";

const ContainerFlexColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Image = styled.img`
  position: relative;
`;
const Title = styled.h2`
  color: #fff;
  font-weight: 300;
`;
const Type = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  text-align: center;
  display: flex;
  justify-content: center;
`;
const OracleText = styled.p`
  color: #fff;
  font-weight: 300;
  max-width: 60%;
`;

const Card2 = ({ name, type_line, oracle_text, image, width }) => (
  <React.Fragment>
    <ContainerFlexColumn>
      <ImageWrapper>
        <Image src={image} width={width} />
      </ImageWrapper>

      <Title>{name}</Title>
      <Type>{type_line}</Type>

      <Type>
        <OracleText>{oracle_text}</OracleText>
      </Type>
    </ContainerFlexColumn>
  </React.Fragment>
);
const Content = props => {
  return (
    <Card2
      card={props.card}
      name={props.name}
      type_line={props.type_line}
      width={props.width}
      image={props.image}
      oracle_text={props.oracle_text}
    />
  );
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const UserCard = ({ match }) => {
  const { state } = useContext(userCardsContext);
  const card = state.cards.find(card => match.params.cardId === card.id);

  return (
    <React.Fragment>
      {match.isExact && (
        <div>
          <Default>
            <Content
              card={card}
              name={card.name}
              type_line={card.type_line}
              oracle_text={card.oracle_text}
              image={card.image_uris.normal}
            />
          </Default>

          <Mobile>
            <Content
              card={card}
              name={card.name}
              type_line={card.type_line}
              oracle_text={card.oracle_text}
              image={card.image_uris.normal}
              width={"300px"}
            />
          </Mobile>
        </div>
      )}
    </React.Fragment>
  );
};

export default UserCard;
