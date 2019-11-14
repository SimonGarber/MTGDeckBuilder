import React, { Component } from "react";
import { UserProvider } from "./stateManagement/userContext";
import GetCards from "./components/GetCards/GetCards";
import ToolBar from "./components/ToolBar/ToolBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";

export default class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }
    return (
      <UserProvider>
        <div
          style={{
            height: "100%"
          }}
        >
          <ToolBar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}

          <main
            style={{
              marginTop: "64px"
            }}
          >
            <GetCards />
          </main>
        </div>
      </UserProvider>
    );
  }
}
