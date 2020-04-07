import React, { Fragment } from "react";
import Form, {
  Field,
  CheckboxField,
  FormFooter,
  HelperMessage,
  ErrorMessage,
  ValidMessage,
} from "@atlaskit/form";
import Button, { ButtonGroup } from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import { Checkbox } from "@atlaskit/checkbox";

import { Container, Card, CardText } from "./styles";

function Auth() {
  return (
    <Container>
      <Card>
        <CardText size={20} weight={"bold"}>
          Autenticação
        </CardText>
        <Form
          onSubmit={(data) => {
            return new Promise((resolve) =>
              setTimeout(resolve, 2000)
            ).then(() =>
              data.username === "error" ? { username: "IN_USE" } : undefined
            );
          }}
        >
          {({ formProps, submitting }) => (
            <form {...formProps}>
              <Field
                name="username"
                label="User name"
                isRequired
                defaultValue=""
              >
                {({ fieldProps, error }) => (
                  <Fragment>
                    <TextField autoComplete="off" {...fieldProps} />
                    {!error && (
                      <HelperMessage>Use letras e números.</HelperMessage>
                    )}
                    {error && (
                      <ErrorMessage>
                        This user name is already in use, try another one.
                      </ErrorMessage>
                    )}
                  </Fragment>
                )}
              </Field>

              <Field
                name="password"
                label="Password"
                defaultValue=""
                isRequired
                validate={(value) =>
                  value && value.length < 8 ? "TOO_SHORT" : undefined
                }
              >
                {({ fieldProps, error, valid, meta }) => (
                  <Fragment>
                    <TextField type="password" {...fieldProps} />
                    {!error && !valid && (
                      <HelperMessage>
                    Use 8 ou mais caracteres, sendo pelo menos uma letra e um numero
                      </HelperMessage>
                    )}
                    {error && (
                      <ErrorMessage>
                        Password needs to be more than 8 characters.
                      </ErrorMessage>
                    )}
                    {valid && meta.dirty ? (
                      <ValidMessage>Awesome password!</ValidMessage>
                    ) : null}
                  </Fragment>
                )}
              </Field>
              <CheckboxField
                name="remember"
                label="Remember me"
                defaultIsChecked
              >
                {({ fieldProps }) => (
                  <Checkbox
                    {...fieldProps}
                    label="Always sign in on this device"
                  />
                )}
              </CheckboxField>
              <FormFooter>
                <ButtonGroup>
                  <Button appearance="subtle">Cancel</Button>
                  <Button
                    type="submit"
                    appearance="primary"
                    isLoading={submitting}
                  >
                    Sign up
                  </Button>
                </ButtonGroup>
              </FormFooter>
            </form>
          )}
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
