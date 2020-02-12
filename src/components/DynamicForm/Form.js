import React, { memo, useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FormDataContext } from "../../stateManagement/Context";
import { Context as searchCardsContext } from "../../stateManagement/searchCardsContext";
import Body from "./Body";

import "../../index.scss";

const Form = memo(() => {
  const [isLoading, setIsLoading] = useState(false);
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };
  const searchCards = useContext(searchCardsContext);
  const context = useContext(FormDataContext);
  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    await searchCards.searchDatabase(context.formData);
    setIsLoading(false);
  };
  return (
    <React.Fragment>
      <Default>
        <form
          className={!isLoading ? "form" : "searchLoading"}
          onSubmit={handleSubmit}
        >
          <div className="albumWrapper">
            <Body />
          </div>

          <button type="submit">Submit</button>
        </form>
      </Default>
      <Mobile>
        <form
          className={!isLoading ? "form" : "searchLoading"}
          onSubmit={handleSubmit}
        >
          <div className="albumWrapper">
            <Body />
          </div>
          <button type="submit">Submit</button>
        </form>
      </Mobile>
    </React.Fragment>
  );
});

export default Form;
