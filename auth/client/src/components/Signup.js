import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class Signup extends Component {
  onSubmit = formProps => {};
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label />
          <Field
            type="text"
            name="email"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label />
          <Field
            type="password"
            name="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <button>Sign Up</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "signup"
})(Signup);
