import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "./ToolBar.css";
import "../SideDrawer/DrawerToggleButton";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
const ToolBar = props => {
  const { state, signout } = useContext(AuthContext);
  const handleLogout = async () => {
    await signout();
  };
  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        {state.token ? (
          <React.Fragment>
            <div className="toolbar-toggle-button">
              <DrawerToggleButton click={props.drawerClickHandler} />
            </div>

            <div className="toolbar-logo">
              <label>MTG Deckbuilder</label>
            </div>

            <div className="spacer"></div>
            <div className="toolbar-navigation-items">
              <ul>
                <li>
                  <Link to="/search">Search</Link>
                </li>
                <li>
                  <Link to="/cards">Collection</Link>
                </li>
                <li>
                  <label onClick={handleLogout}>Log Out</label>
                </li>
              </ul>
            </div>
          </React.Fragment>
        ) : (
          <Redirect to="/signin" />
        )}
      </nav>
    </header>
  );
};
export default ToolBar;
