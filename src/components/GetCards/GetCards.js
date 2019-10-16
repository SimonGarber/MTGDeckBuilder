import React, { useState, useContext } from 'react';
import CardList from '../CardList/CardList';
import './GetCards.css';
import { UserContext } from '../../userContext';
import { Grid, Button } from 'semantic-ui-react';
export default function GetCards() {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');
  const context = useContext(UserContext);
  const getCardsHandler = (e) => {
    console.log(context);
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
        const obj = data.map((card) => {
          if (card.data.image_uris) {
            return {
              id: card.data.id,
              image: card.data.image_uris.small,
              name: card.data.name,
              artist: card.data.artist,
              reserved: card.data.reserved,
              setName: card.data.set_name,
              commanderLegal: card.data.legalities.commander,
              modernLegal: card.data.legalities.modern,
              legacyLegal: card.data.legalities.legacy,
              vintageLegal: card.data.legalities.vintage,
              standardLegal: card.data.legalities.standard,
              pauperLegal: card.data.legalities.pauper,
              oldSchoolLegal: card.data.legalities.oldschool,
              cardType: card.data.type_line,
              manaCost: card.data.cmc,
              colorIdentity: card.data.color_identity.map((identity) => {
                return identity;
              }),
              isModern: card.data.legalities.modern === 'legal',
              isLegacy: card.data.legalities.legacy === 'legal',
              isCommander: card.data.legalities.commander === 'legal',
              isVintage:
                card.data.legalities.vintage === 'restricted' || 'legal'
            };
          } else {
            return {
              id: 'invalid card data',
              image: null
            };
          }
        });

        setCards(obj);
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
        justifyContent: 'center'
      }}
    >
      <div>
        <form
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            marginTop: '8rem'
          }}
          onSubmit={getCardsHandler}
        >
          {' '}
          <div>
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
            <input
              className="search-heading"
              value={query}
              onChange={handleChange}
              type="text"
              style={{
                height: '50px'
              }}
            />
          </div>
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
        </form>
      </div>
      <Grid columns="equal">
        <CardList cards={cards} />
      </Grid>
    </div>
  );
}
