import React, { useState, useContext } from 'react';
import CardList from '../CardList/CardList';
import './GetCards.css';
import { UserConsumer, UserContext } from '../../userContext';
import { Grid } from 'semantic-ui-react';
export default function GetCards() {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');
  const ModernContext = useContext(UserContext);
  const getCardsHandler = (e) => {
    console.log(ModernContext);
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
              isModern: card.data.legalities.modern === 'legal'
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
    <UserConsumer>
      {({ updateIsModern }) => (
        <div
          style={{
            justifyContent: 'center'
          }}
        >
          <form
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              marginTop: '8rem'
            }}
            onSubmit={getCardsHandler}
          >
            <input
              value={ModernContext.isModern}
              type="checkbox"
              onChange={updateIsModern}
            />
            <input
              className="search-heading"
              value={query}
              onChange={handleChange}
              type="text"
            />
            <button type="submit">Get Cards</button>
          </form>
          <Grid columns="equal">
            <CardList cards={cards} />
          </Grid>
        </div>
      )}
    </UserConsumer>
  );
}
