import React, { useContext } from "react";

import { Context as SearchCardsContext } from "../../stateManagement/searchCardsContext";
import { Context as AuthContext } from "../../stateManagement/AuthContext";

import NavBar from "../NavBar/Nav";
import "./ToolBar.css";
import "../SideDrawer/DrawerToggleButton";

const ToolBar = () => {
  const { state, signout } = useContext(AuthContext);
  const searchCards = useContext(SearchCardsContext);
  const handleLogout = async () => {
    await signout();
  };
  const handleReset = async () => {
    const emptyCards = [];
    await searchCards.resetSearch(emptyCards);
  };

  return (
    <NavBar
      state={state}
      searchCards={searchCards}
      handleReset={handleReset}
      handleLogout={handleLogout}
    />
  );
};
export default ToolBar;
