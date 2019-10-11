import React, { useState } from 'react';
import CardList from '../CardList/CardList';
import './GetCards.css';
import { Container, Row } from 'react-bootstrap';

const GetCards = () => {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');
  const getCardsHandler = (e) => {
    e.preventDefault();
    const request = new Request(
      `http://localhost:3001/api/cards/${query}`,
      // `https://api.scryfall.com/cards/search?q=${query}`,

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
              image: card.data.image_uris.normal,
              name: card.data.name
            };
          } else {
            return {
              id: card.data.id,
              image:
                'https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/f/f8/Magic_card_back.jpg?version=0ddc8d41c3b69c2c3c4bb5d72669ffd7'
            };
          }
        });
        setCards(obj);
      })

      .catch((err) => {
        console.log('Error =>', err);
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
      <form
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
        onSubmit={getCardsHandler}
      >
        <input
          className="search-heading"
          value={query}
          onChange={handleChange}
          type="text"
        />
        <button type="submit">Get Cards</button>
      </form>
      <Container className="gallery-view">
        <Row>
          <CardList className="Card-Container" cards={cards} />
        </Row>
      </Container>
    </div>
  );
};
export default GetCards;
