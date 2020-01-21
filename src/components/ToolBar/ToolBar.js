import React from "react";
import "./ToolBar.css";
import "../SideDrawer/DrawerToggleButton";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolBar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      {props.loggedIn ? (
        <React.Fragment>
          <div className="toolbar-toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
          </div>

          <div className="toolbar-logo">
            <button>
              <label onClick={props.showSearch}>MTG Deckbuilder</label>
            </button>
          </div>

          <div className="spacer"></div>
          <div className="toolbar-navigation-items">
            <ul>
              <li>
                <label onClick={props.showSearch}>Search</label>
              </li>
              <li>
                <label onClick={props.showCollection}>Collection</label>
              </li>
              <li>
                <label onClick={props.logout}>Log Out</label>
              </li>
            </ul>
          </div>
        </React.Fragment>
      ) : null}
    </nav>
  </header>
);
export default toolBar;
