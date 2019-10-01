import React from 'react';
import { Card } from 'react-bootstrap';
const CardItem = (props) => {
  return (
    <div>
      <Card>
        {props.value === null ? (
          <h3>There is no data yet</h3>
        ) : (
          <div>
            <h3>{props.value.name}</h3>
            <h4>{props.value.artist}</h4>
          </div>
        )}
      </Card>
    </div>
  );
};
export default CardItem;
