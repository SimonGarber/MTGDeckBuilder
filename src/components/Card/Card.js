import React, { useContext } from "react";

import { useMediaQuery } from "react-responsive";
import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
import SearchCard from "../SearchCard/SearchCard";
import StarCityLink from "../CustomLink/StarCityLink";
import "../../index.scss";
import styled from "styled-components";
import CardLinks from "../../helpers/cardCheck";
const ContainerFlexColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: gray;
`;
const ContainerFlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: black;
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
  text-align-center;
  display: flex;
  justify-content: center;
`;
const OracleText = styled.p`
  color: #fff;
  font-weight: 300;
  max-width: 60%;
`;

const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`;
const Card2 = ({ name, type_line, oracle_text, image, width, actions }) => (
  <>
    <ContainerFlexColumn>
      <ImageWrapper>
        <Image src={image} width={width} />
      </ImageWrapper>

      <Title>{name}</Title>
      <Type>{type_line}</Type>

      <Type>
        <OracleText>{oracle_text}</OracleText>
      </Type>
      <Type>
        {actions.map(({ label }) => (
          <ActionButton>{label}</ActionButton>
        ))}
      </Type>
    </ContainerFlexColumn>
  </>
);
const Content = props => {
  const buttons = [
    {
      label: "Regular"
    },
    {
      label: "Foil"
    },
    {
      label: "MTG Goldfish"
    }
  ];
  return (
    <Card2
      card={props.card}
      name={props.name}
      type_line={props.type_line}
      actions={buttons}
      width={props.width}
      image={props.image}
      oracle_text={props.oracle_text}
    />
  );
};
const Card = props => (
  <>
    <ContainerFlexColumn>
      <Image src={props.card.image_uris.normal} width={props.width} />

      <Title>{props.card.name}</Title>
      <Type>{props.card.type_line}</Type>
      <OracleText>{props.card.oracle_text}</OracleText>
    </ContainerFlexColumn>
    <ContainerFlexRow>
      <ActionButton>0 Comments</ActionButton>
      <ActionButton>0 Likes</ActionButton>
      <ActionButton>0 Views</ActionButton>
    </ContainerFlexRow>
  </>
);

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
  console.log(card.oracle_text);
  return (
    <>
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
    </>
  );

  //   const card = state.cards.find(card => match.params.cardId === card.id);

  //   return (
  //     <>
  //       {match.isExact && (
  //         <>
  //           <Default>
  //             <SearchCard card={card} />
  //           </Default>

  //           <Mobile>
  //             <SearchCard card={card} imageWidth="300px" />
  //           </Mobile>
  //         </>
  //       )}
  //     </>
  //   );
};

export default UserCard;
