import React, { memo, useContext, useState } from "react";
import { FormDataContext } from "../../stateManagement/Context";
import { Context as searchCardsContext } from "../../stateManagement/searchCardsContext";
import Body from "./Body";
import { trackPromise } from "react-promise-tracker";
import styles from "../../styles/styles";

const Form = memo(() => {
  const context = useContext(FormDataContext);
  const searchContext = useContext(searchCardsContext);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    trackPromise(
      searchContext
        .searchDatabase(context.formData)

        .catch(err => {
          console.log("Error Searching DataBase =>", err);
        })
    );
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <form
        style={!isLoading ? styles.form : styles.searchLoading}
        onSubmit={handleSubmit}
      >
        <h1 style={styles.formTitle}>Card Search Form</h1>

        <div style={styles.albumWrapper}>
          <Body />
        </div>

        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
});

export default Form;
