import React, { useState, useContext } from 'react';
import CardList from '../CardList/CardList';
import './GetCards.css';
import { UserContext } from '../../userContext';
import { Grid, Button, Container, Form } from 'semantic-ui-react';

const GetCards = () => {
  const [cards, setCards] = useState([]);
  // const [query, setQuery] = useState('');
  const [newQuery, setNewQuery] = useState({
    name: '',
    set: '',
    cmc: '',
    typeLine: '',
    oracleText: ''
  });

  const context = useContext(UserContext);

  const getCardsHandler = (e) => {
    e.preventDefault();

    const url = new URL(
      `http://localhost:3001/api/cards/?name=${newQuery.name}&set=${newQuery.set}&cmc=${newQuery.cmc}&typeLine=${newQuery.typeLine}&oracleText=${newQuery.oracleText}`
    );

    const request = new Request(url, {
      mode: 'cors',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });

    fetch(request)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        console.log(data);
        const obj = data.map((card) => {
          if (card.image_uris) {
            return {
              id: card.id,
              image2: card.image_uris.border_crop,
              image: card.image_uris.normal,
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
              colorIdentity: card.color_identity.map((identity) => {
                return identity;
              }),
              isModern: card.legalities.modern === 'legal',
              isLegacy: card.legalities.legacy === 'legal',
              isCommander: card.legalities.commander === 'legal',
              isVintage: card.legalities.vintage === 'restricted' || 'legal'
            };
          } else {
            return {
              id: 'invalid card data',
              image: null
            };
          }
        });
        console.log(obj);
        setCards(obj);

        setNewQuery({
          ...newQuery,
          name: '',
          set: '',
          cmc: '',
          typeLine: '',
          oracleText: ''
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const handleNameChange = (e) => {
    setNewQuery({ ...newQuery, name: e.target.value });
  };
  const handleSetChange = (e) => {
    setNewQuery({ ...newQuery, set: e.target.value });
  };
  const handleTypeLineChange = (e) => {
    setNewQuery({ ...newQuery, typeLine: e.target.value });
  };
  const handleCmcChange = (e) => {
    setNewQuery({ ...newQuery, cmc: e.target.value });
  };
  const handleOracleTextChange = (e) => {
    setNewQuery({ ...newQuery, oracleText: e.target.value });
  };
  return (
    <div
      style={{
        width: '100%',
        top: '4.3rem',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Form className="FormContainer" onSubmit={getCardsHandler}>
        {' '}
        <div
          style={{
            padding: '2rem',
            backgroundColor: '#5AC6FC'
          }}
        >
          <label>
            Commander
            <input
              id="Commander"
              type="checkbox"
              onChange={context.updateIsCommander}
            ></input>
          </label>

          <label>
            Vintage
            <input
              id="Vintage"
              type="checkbox"
              onChange={context.updateIsVintage}
            ></input>
          </label>
          <label>
            Legacy
            <input
              id="Legacy"
              type="checkbox"
              onChange={context.updateIsLegacy}
            ></input>
          </label>
          <label>
            Modern
            <input
              id="Modern"
              type="checkbox"
              onChange={context.updateIsModern}
            ></input>
          </label>
        </div>
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
            height: '50px',
            backgroundColor: '#03b6fc'
          }}
        >
          Get Cards
        </Button>
      </Form>

      <Container
        style={{
          width: '100%',

          position: 'absolute'
        }}
      >
        <Grid
          centered
          style={{
            textAlign: 'center'
          }}
        >
          <CardList cards={cards} />
        </Grid>
      </Container>
    </div>
  );
};

export default GetCards;
