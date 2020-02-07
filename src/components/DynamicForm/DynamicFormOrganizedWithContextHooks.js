import React from "react";

import { FormDataProvider } from "../../stateManagement/Context";

import Form from "./Form";

const DynamicFormOrganizedWithContextHooks = () => (
  <FormDataProvider>
    <Form />
  </FormDataProvider>
);

export default DynamicFormOrganizedWithContextHooks;
