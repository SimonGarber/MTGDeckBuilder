import React, { useState, useContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "../../index.scss";

import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
import * as Auth from "../../stateManagement/AuthContext";
import { Button, Form, Card, Image, Icon } from "semantic-ui-react";
import searchedArray from "../../helpers/checkResult";
import DashBoard from "../../DashBoard";
const GetCards = props => {
  const [cards, setCards] = useState([]);

  const [newQuery, setNewQuery] = useState({
    name: "",
    set: "",
    cmc: "",
    typeLine: "",
    oracleText: "",
    colorIdentity: "",
    numOfResults: ""
  });
  const userCards = useContext(userCardsContext);
  const user = useContext(Auth.Context);
  useEffect(() => {
    userCards.getCards(user.state.userId);
  }, []);

  // const context = useContext(UserContext);
  // const Desktop = ({ children }) => {
  //   const isDesktop = useMediaQuery({ minWidth: 992 });
  //   return isDesktop ? children : null;
  // };
  // const Tablet = ({ children }) => {
  //   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  //   return isTablet ? children : null;
  // };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };
  // const saveCardHandler = async () => {
  //   await userCards.addCard();
  // };
  const getCardsHandler = async () => {
    await fetch(
      // `http://localhost:3001/api/v1/query/?name=${newQuery.name}&set=${newQuery.set}&cmc=${newQuery.cmc}&typeLine=${newQuery.typeLine}&oracleText=${newQuery.oracleText}&colorIdentity=${newQuery.colorIdentity}`,
      `https://mtgdeckbuilder-api.herokuapp.com/api/v1/query/?name=${newQuery.name}&set=${newQuery.set}&cmc=${newQuery.cmc}&typeLine=${newQuery.typeLine}&oracleText=${newQuery.oracleText}&colorIdentity=${newQuery.colorIdentity}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error();
        }
      })

      .then(data => {
        const obj = data.data.map(card => {
          if (card.image_uris) {
            return {
              id: card.id,
              image2: card.image_uris.border_crop
                ? card.image_uris.border_crop
                : null,
              image: card.image_uris.normal ? card.image_uris.normal : null,
              image3: card.image_uris.small ? card.image_uris.small : null,
              name: card.name,
              artist: card.artist,
              reserved: card.reserved,
              setName: card.set_name,
              commanderLegal: card.legalities.commander,
              modernLegal: card.legalities.modern,
              legacyLegal: card.legalities.legacy,
              vintageLegal: card.legalities.vintage,
              standardLegal: card.legalities.standard,
              pauperLegal: card.legalities.pauper,
              oldSchoolLegal: card.legalities.oldschool,
              cardType: card.type_line,
              manaCost: card.cmc,
              colorIdentity: card.color_identity.map(identity => {
                return identity;
              }),
              isModern: card.legalities.modern === "legal",
              isLegacy: card.legalities.legacy === "legal",
              isCommander: card.legalities.commander === "legal",
              isVintage: card.legalities.vintage === "restricted" || "legal",
              queryResults: data.length
            };
          } else {
            return {
              id: "invalid card data",
              image: null
            };
          }
        });
        setCards(obj);

        setNewQuery({
          ...newQuery,
          name: "",
          set: "",
          cmc: "",
          typeLine: "",
          oracleText: "",
          colorIdentity: "",
          numOfResults: obj.length
        });
      });
  };

  const handleNameChange = e => {
    setNewQuery({ ...newQuery, name: e.target.value });
  };
  const handleSetChange = e => {
    setNewQuery({ ...newQuery, set: e.target.value });
  };
  const handleTypeLineChange = e => {
    setNewQuery({ ...newQuery, typeLine: e.target.value });
  };
  const handleCmcChange = e => {
    setNewQuery({ ...newQuery, cmc: e.target.value });
  };
  const handleOracleTextChange = e => {
    setNewQuery({ ...newQuery, oracleText: e.target.value });
  };
  const handleColorIdentityChange = e => {
    setNewQuery({ ...newQuery, colorIdentity: e.target.value });
  };
  return (
    <React.Fragment>
      <DashBoard history={props.history} />
      <div className="GetCardsContainer">
        {cards.length < 1 ? <h2>Card Search</h2> : null}
        <Form
          className={
            cards.length < 1 ? "FormContainer" : "FormContainer-collapse"
          }
          onSubmit={getCardsHandler}
        >
          <Form.Input
            className="input-field"
            value={newQuery.colorIdentity}
            onChange={handleColorIdentityChange}
            type="text"
            placeholder="Color Identity"
          />
          <Form.Input
            value={newQuery.oracleText}
            onChange={handleOracleTextChange}
            type="text"
            placeholder="Oracle Text"
          />
          <Form.Input
            value={newQuery.cmc}
            onChange={handleCmcChange}
            type="text"
            placeholder="cmc"
          />
          <Form.Input
            value={newQuery.typeLine}
            onChange={handleTypeLineChange}
            type="text"
            placeholder="type line"
          />
          <Form.Input
            value={newQuery.set}
            onChange={handleSetChange}
            type="text"
            placeholder="set name"
          />
          <Form.Input
            id="cardName"
            name="name"
            value={newQuery.name}
            onChange={handleNameChange}
            placeholder="card name"
            type="text"
          />
          <Button
            className="ui primary button"
            type="submit"
            style={{
              height: "50px",
              backgroundColor: "#03b6fc"
            }}
          >
            Get Cards
          </Button>
          {newQuery.numOfResults === "" ? null : (
            <div style={{ background: "black" }}>
              {" "}
              <p style={{ color: "white" }}>
                {" "}
                Returned {newQuery.numOfResults} Matches
              </p>
            </div>
          )}
        </Form>
        {cards.length > 0 ? (
          <React.Fragment>
            <Default>
              {cards.map(card => {
                return (
                  <Card
                    // className="Card"
                    bg="primary"
                    text="white"
                    key={card.id}
                  >
                    <Image src={card.image} wrapped ui={false} />
                    {!searchedArray(card.id, userCards.state.cards) ? (
                      <Card.Content extra>
                        <a
                          onClick={() =>
                            userCards.addCard(
                              user.state.userId,
                              card.id,
                              card.name,
                              card.image
                            )
                          }
                        >
                          <Icon name="save" />
                          Add Card
                        </a>
                      </Card.Content>
                    ) : (
                      <a>In Collection</a>
                    )}
                  </Card>
                );
              })}
            </Default>

            <Mobile>
              {cards.map(card => {
                return (
                  <Card
                    // className="Card-mobile"
                    bg="primary"
                    text="white"
                    key={card.id}
                  >
                    <Image src={card.image} wrapped ui={false} />
                    {!searchedArray(card.id, userCards.state.cards) ? (
                      <Card.Content extra>
                        <a
                          onClick={() =>
                            userCards.addCard(
                              user.state.userId,
                              card.id,
                              card.name,
                              card.image
                            )
                          }
                        >
                          <Icon name="save" />
                          Add Card
                        </a>
                      </Card.Content>
                    ) : (
                      <a>In Collection</a>
                    )}
                  </Card>
                );
              })}
            </Mobile>
          </React.Fragment>
        ) : (
          <p>No Cards to display yet</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default GetCards;
