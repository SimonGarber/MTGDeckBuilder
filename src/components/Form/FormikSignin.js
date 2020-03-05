import React from "react";
import { Formik } from "formik";
import { Title, Input, Form, Button, Text, Label } from "./theme";

const FormikSignin = () => {
  return (
    <div>
      <Title>Sign In</Title>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          let errors = {};
          let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
          if (!values.email) {
            errors.email = "Email is required";
          } else if (regex.test(values.email) === false) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "A password is required";
          } else if (values.password.length < 6) {
            errors.password = "Password must be 6 characters or more";
          }
          return errors;
        }}
        onSubmit={values => {}}
      >
        {({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <Form onSubmit={handleSubmit}>
            <Label>
              Email *
              {touched.email && errors.email && (
                <Text color="red">{errors.email}</Text>
              )}
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                border={touched.email && errors.email && "1px solid red"}
                type="text"
                name="email"
                placeholder="Email"
              />
            </Label>
            <Label>
              Password *
              {touched.password && errors.password && (
                <Text color="red">{errors.password}</Text>
              )}
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                border={touched.password && errors.password && "1px solid red"}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Label>

            <Button type="submit">submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikSignin;
