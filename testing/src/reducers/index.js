import { combineReducers } from "redux";

import commentsReduser from "reducers/comments";
import authReduser from "reducers/auth";

export default combineReducers({
  comments: commentsReduser,
  auth: authReduser
});
