import { TOP_TEN_MEMBER } from "../actions/types";

const initialState = {
  topTen: []
};

const topTenReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOP_TEN_MEMBER:
      return {
        ...state,
        topTen: action.result
      };
    default:
      return state;
  }
};

export default topTenReducer;
