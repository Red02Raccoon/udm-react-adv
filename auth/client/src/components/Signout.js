import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }
  render() {
    return (
      <div>
        <b>Sorry to see you go!</b>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Signout);
