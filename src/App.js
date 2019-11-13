import React, { Component } from "react";
import { UserProvider } from "./stateManagement/userContext";
import GetCards from "./components/GetCards/GetCards";
import Nav from "./components/NavBar/Nav";

export default class App extends Component {
  render() {
    return (
      <UserProvider>
        <Nav />
        <GetCards />
      </UserProvider>
    );
  }
}
