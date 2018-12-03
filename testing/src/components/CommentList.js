import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map((comment, id) => {
      return <li key={id}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

function mapSateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapSateToProps)(CommentList);
