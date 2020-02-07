import React, { useMemo, useState } from "react";
import { fields } from "../components/DynamicForm/formData";
export const FormDataContext = React.createContext();

const computeInitialState = () => {
  const data = {};
  for (let i = 0; i < fields.length; i++) {
    data[`${fields[i].fieldId}`] = "";
  }
  return data;
};

export const FormDataProvider = props => {
  const formData = useMemo(() => computeInitialState(), [fields]);

  const [state, setState] = useState({ formData });

  const handleSetState = object => {
    const { formData } = state;
    setState({ formData: { ...formData, ...object }, setState });
  };
  const value = { ...state, setState: handleSetState };

  return (
    <FormDataContext.Provider value={value}>
      {props.children}
    </FormDataContext.Provider>
  );
};
