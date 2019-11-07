import React, { useState, useContext } from 'react';
import CardList from '../CardList/CardList';
import './GetCards.css';
import { UserContext } from '../../userContext';
import { Grid, Button, Container, Form } from 'semantic-ui-react';

const GetCards = () => {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');
  const context = useContext(UserContext);
  const getCardsHandler = (e) => {
    e.preventDefault();
    const request = new Request(
      `http://localhost:3001/api/cards/${query}`,

      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
    );

    fetch(request)
      .then((response) => {
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

        setCards(obj);
        setQuery('');
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div
      style={{
        width: '100%',
        top: '4.3rem',
        left: '10rem',
        position: 'absolute',
        display: 'flex'
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
          value={query}
          onChange={handleChange}
          type="text"
          style={{
            height: '50px',
            backgroundColor: '#ECFDA0',
            padding: '0.5rem'
          }}
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
          margin: '12.5rem',
          width: '90%',

          position: 'absolute'
        }}
      >
        <Grid
          centered
          style={{
            position: 'relative',
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
