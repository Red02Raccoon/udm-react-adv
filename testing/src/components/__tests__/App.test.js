import React from "react";
// import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;
beforeEach(() => {
  // выполниться перед каждым выполнение it ТОЛЬКО в ЭТОМ файле
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  // without enzyme.
  // const div = document.createElement("div");
  // ReactDOM.render(<App />, div);
  // expect(div.innerHTML).toContain("Comment Box"); // bad solution
  // ReactDOM.unmountComponentAtNode(div); // need cleanup code after testing - need for performance

  // with enzyme.
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
