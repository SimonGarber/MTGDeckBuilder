import React from "react";
import "./ToolBar.css";
import "../SideDrawer/DrawerToggleButton";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolBar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div className="toolbar-toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar-logo">
        <a href="/">MTG Deckbuilder</a>
      </div>
      <div className="spacer"></div>
      <div className="toolbar-navigation-items">
        <ul>
          <li>
            <label onClick={props.logout}>Log Out</label>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default toolBar;
