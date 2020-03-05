import React, { useContext } from "react";
import { Formik, useField, Form } from "formik";
import { Context as SearchContext } from "../../stateManagement/searchCardsContext";
import { Context as UserCardsContext } from "../../stateManagement/userCardsContext";
import styled from "styled-components";
import { Button, Checkbox, FormControlLabel, Input } from "@material-ui/core";

const FieldContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
const FormContainerColumn = styled.div`
  justify-content: center;

  padding: 1rem;
`;

const FormContainerRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 1rem;
`;

const MyCheckBox = ({ label, ...props }) => {
  const [field] = useField(props);

  return <FormControlLabel {...field} control={<Checkbox />} label={label} />;
};

const MyTextField = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <React.Fragment>
      <label style={{ display: "grid", padding: "1em" }}>
        {label}
        <Input {...field} {...props} />
      </label>
    </React.Fragment>
  );
};

const NewForm = () => {
  const { searchDatabase } = useContext(SearchContext);
  const { state } = useContext(UserCardsContext);
  const handleSubmit = async (data, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    await searchDatabase(data, state);
    setSubmitting(false);
    resetForm();
  };
  return (
    <FieldContainer>
      <Formik
        initialValues={{
          cardName: "",
          setName: "",
          colorId: "",
          cmc: "",
          typeLine: "",
          oracleText: "",
          colors: []
        }}
        onSubmit={handleSubmit}
      >
        {({ values, isSubmitting }) => (
          <React.Fragment>
            <Form>
              <FormContainerColumn>
                <MyTextField name="cardName" type="input" label="Card Name" />

                <MyTextField name="setName" type="input" label="Set Name" />

                <MyTextField
                  name="colorId"
                  type="input"
                  label="Color Identity"
                />

                <MyTextField
                  name="cmc"
                  type="input"
                  label="Converted Mana Cost"
                />

                <MyTextField name="typeLine" label="Type Line" type="input" />

                <MyTextField
                  name="oracleText"
                  type="input"
                  label="Oracle Text"
                />
              </FormContainerColumn>

              <FormContainerRow>
                <MyCheckBox
                  name="colors"
                  type="checkbox"
                  value={`W`}
                  label="White"
                />
                <MyCheckBox
                  name="colors"
                  type="checkbox"
                  value={`U`}
                  label="Blue"
                />
                <MyCheckBox
                  name="colors"
                  type="checkbox"
                  value={`B`}
                  label="Black"
                />
                <MyCheckBox
                  name="colors"
                  type="checkbox"
                  value={`R`}
                  label="Red"
                />
                <MyCheckBox
                  name="colors"
                  type="checkbox"
                  value={`G`}
                  label="Green"
                />
              </FormContainerRow>
              <FieldContainer>
                <Button disabled={isSubmitting} type="submit">
                  submit
                </Button>
              </FieldContainer>
            </Form>
          </React.Fragment>
        )}
      </Formik>
    </FieldContainer>
  );
};

export default NewForm;
