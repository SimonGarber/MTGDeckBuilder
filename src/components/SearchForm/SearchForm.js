import React, { useContext } from "react";
import { useFormState } from "react-use-form-state";
import { Context as searchCardsContext } from "../../stateManagement/searchCardsContext";
import "./SearchForm.css";
const SearchForm = () => {
  const { searchDatabase } = useContext(searchCardsContext);

  const [formState, { label, text }] = useFormState(
    {
      colorId: "",
      oracleText: "",
      cmc: "",
      typeLine: "",
      setName: "",
      cardName: ""
    },
    {
      onChange(e, stateValues, nextStateValues) {
        const { name, value, ...target } = e.target;
      }
    }
  );

  const handleSubmit = (e, formData) => {
    e.preventDefault();
    searchDatabase(formData);
  };

  const handleReset = e => {
    e.preventDefault();
    formState.reset();
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="innerForm">
          <div className="fieldContainer">
            <label {...label("colorId")}>Color Identity</label>
            <input {...text("colorId")} />
          </div>
          <div className="fieldContainer">
            <label {...label("oracleText")}>Oracle Text</label>
            <input {...text("oracleText")} />
          </div>
          <div className="fieldContainer">
            <label {...label("cmc")}>Converted Mana Cost</label>
            <input {...text("cmc")} />
          </div>
          <div className="fieldContainer">
            <label {...label("typeLine")}>Type Line</label>
            <input {...text("typeLine")} />
          </div>
          <div className="fieldContainer">
            <label {...label("setName")}>Set Name</label>
            <input {...text("setName")} />
          </div>
          <div className="fieldContainer">
            <label {...label("cardName")}>Card Name</label>
            <input {...text("cardName")} />
          </div>
          <div classname="buttonContainer">
            <button
              onClick={e => handleSubmit(e, formState.values)}
              className="buttonContainer btn"
            >
              Submit
            </button>
            <button
              onClick={e => handleReset(e)}
              className="buttonContainer btn"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
