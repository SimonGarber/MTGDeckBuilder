import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Context as SearchContext } from "../../stateManagement/searchCardsContext";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
const NavLinks = ({ history, ...props }) => {
  const { state, signout } = useContext(AuthContext);
  const SearchCards = useContext(SearchContext);
  const handleLogout = async () => {
    try {
      await signout();
    } catch (e) {
      console.log({ Error: e.message });
    }
  };
  let tempTabIndex;
  if (props.isMobileLink) {
    tempTabIndex = "-1";
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "4rem"
      }}
    >
      {state.token ? (
        <ul className="nav-links">
          <li>
            <Link to="/search" className="link" tabIndex={tempTabIndex}>
              Search
            </Link>
          </li>

          <li>
            <Link to="/cards" className="link" tabIndex={tempTabIndex}>
              Collection
            </Link>
          </li>

          <li>
            <Link
              to="/signin"
              onClick={handleLogout}
              className="link"
              tabIndex={tempTabIndex}
            >
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <Redirect to="/signin" />
      )}
    </div>
  );
};

export default NavLinks;
