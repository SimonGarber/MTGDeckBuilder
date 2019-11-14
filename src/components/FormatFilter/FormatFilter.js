import React from "react";
import { useContext } from "react";
import { UserContext } from "../../stateManagement/userContext";
import "./FormatFilter.css";
const FormatFilter = () => {
  const context = useContext(UserContext);
  return (
    <div className="FormatFilter">
      <label>
        Commander
        <input
          id="Commander"
          type="checkbox"
          onChange={context.updateIsCommander}
        ></input>
      </label>

      <label>
        Vintage
        <input
          id="Vintage"
          type="checkbox"
          onChange={context.updateIsVintage}
        ></input>
      </label>
      <label>
        Legacy
        <input
          id="Legacy"
          type="checkbox"
          onChange={context.updateIsLegacy}
        ></input>
      </label>
      <label>
        Modern
        <input
          id="Modern"
          type="checkbox"
          onChange={context.updateIsModern}
        ></input>
      </label>
    </div>
  );
};

export default FormatFilter;
