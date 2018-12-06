import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { Button } from "reactstrap";

import { Inputs, InputRow, InputsList, ErrorBlock } from "./styled/Form";

import * as actions from "../actions";

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push("/feature");
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Inputs>
          <InputsList>
            <InputRow>
              <label htmlFor="email">email</label>
              <Field
                type="text"
                name="email"
                component="input"
                autoComplete="none"
                placeholder="email"
              />
            </InputRow>
            <InputRow>
              <label htmlFor="password">password</label>
              <Field
                type="password"
                name="password"
                component="input"
                autoComplete="none"
                placeholder="password"
              />
            </InputRow>
          </InputsList>
          <ErrorBlock>{this.props.errorMessage}</ErrorBlock>
        </Inputs>
        <Button outline color="info">
          Sign In
        </Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signin" })
)(Signin);
