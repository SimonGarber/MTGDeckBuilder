import React, { useState, useContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
import { Button, Form, Card, Image } from "semantic-ui-react";
import searchedArray from "../../helpers/checkResult";
import stringToSplit from "../../helpers/stringSplit";
import Portal from "../Portal/Portal";
import DashBoard from "../DashBoard/DashBoard";
import "../../index.scss";

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
  const { state } = useContext(AuthContext);

  const showSearch = () => {
    props.history.push("/search");
  };
  const handleAddCard = async ({ state, card }) => {
    const { userId } = state;
    const { id, name, images } = card;
    await userCards.addCard(userId, id, name, images);
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
          throw new Error("Message");
        }
      })

      .then(data => {
        const obj = data.data.map(card => {
          if (card.image_uris) {
            return {
              id: card.id,
              images: [
                {
                  image2: card.image_uris.border_crop
                    ? card.image_uris.border_crop
                    : null
                },
                {
                  image: card.image_uris.normal ? card.image_uris.normal : null
                },
                { image3: card.image_uris.small ? card.image_uris.small : null }
              ],

              name: card.name,
              artist: card.artist,
              reserved: card.reserved,
              setName: card.set_name,
              set: card.set,
              collectionNumer: card.collector_number,
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
              queryResults: data.length,
              in_Collection: searchedArray(card.id, userCards.state.cards)
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
  useEffect(() => {
    userCards.getCards(state);
  }, [userCards.state.showCard]);
  return (
    <React.Fragment>
      <DashBoard history={props.history} search={showSearch} />

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
            <Portal>
              <Default>
                {cards.map(card => {
                  console.log(
                    card.name.replace(/[.,\/#!$%\^&\*;:{}=\-_`'~()]/g, "")
                  );

                  return (
                    <div>
                      <Card bg="primary" text="white" key={card.id}>
                        <Image
                          src={`https://img.scryfall.com/cards/normal/front/${
                            card.id[0]
                          }/${card.id[1]}/${card.id}.jpg?${card.id.slice(
                            0,
                            10
                          )}`}
                          wrapped
                          ui={false}
                        />
                        {!card.in_Collection ? (
                          <Card.Content extra>
                            <button
                              onClick={() =>
                                handleAddCard({ state, card }).then(() => {})
                              }
                            >
                              Add Card
                            </button>
                            <a
                              href={`https://starcitygames.com/${stringToSplit(
                                card.name
                              ).join("-")}-sgl-mtg-${card.set}-${
                                card.collectionNumer
                              }-enn/`}
                              target="_blank"
                            >
                              Link to Star City Games
                            </a>
                          </Card.Content>
                        ) : (
                          <button
                            style={{
                              color: "white",
                              backgroundColor: "Green"
                            }}
                          >
                            In Collection
                          </button>
                        )}
                      </Card>
                    </div>
                  );
                })}
              </Default>
            </Portal>
            <Portal>
              <Mobile>
                {cards.map(card => {
                  return (
                    <div>
                      <Card bg="primary" text="white" key={card.id}>
                        <Image
                          width="300px"
                          src={`https://img.scryfall.com/cards/normal/front/${
                            card.id[0]
                          }/${card.id[1]}/${card.id}.jpg?${card.id.slice(
                            0,
                            10
                          )}`}
                          wrapped
                          ui={false}
                        />

                        {!card.in_Collection ? (
                          <Card.Content extra>
                            <button
                              onClick={() => handleAddCard({ state, card })}
                            >
                              Add Card
                            </button>
                            <a
                              href={`https://starcitygames.com/${stringToSplit(
                                card.name
                              ).join("-")}-sgl-mtg-${card.set}-${
                                card.collectionNumer
                              }-enn/`}
                              target="_blank"
                            >
                              Link to Star City Games
                            </a>
                          </Card.Content>
                        ) : (
                          <button
                            style={{
                              color: "white",
                              backgroundColor: "Green"
                            }}
                          >
                            In Collection
                          </button>
                        )}
                      </Card>
                    </div>
                  );
                })}
              </Mobile>
            </Portal>
          </React.Fragment>
        ) : (
          <p>No Cards to display yet</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default GetCards;
