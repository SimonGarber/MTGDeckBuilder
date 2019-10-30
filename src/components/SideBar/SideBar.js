import React from 'react';
import { Card, Segment, Button } from 'semantic-ui-react';
import './SideBar.css';
const SideBar = () => {
  return (
    <Segment className="SideBar">
      <Card>
        <Card.Header>Menu</Card.Header>
        <Card.Content className="Buttons">
          <Button>Menu</Button>
          <Button>Search</Button>
          <Button>Account</Button>
        </Card.Content>
      </Card>
    </Segment>
  );
};

export default SideBar;
