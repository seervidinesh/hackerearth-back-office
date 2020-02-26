import { combineReducers } from "redux";

import loanReducer from "./loanReducer";
import memberReducer from "./memberReducer";
import topTenReducer from "./topTenReducer";

export default combineReducers({
  loan: loanReducer,
  member: memberReducer,
  topTen: topTenReducer
});
