import { GET_LOAN_DATA } from "../actions/types";

const initialState = {
  loanData: [],
  pageInfo: {}
};

const loanReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOAN_DATA:
      return {
        ...state,
        loanData: action.result,
        pageInfo: action.pageInfo
      };
    default:
      return state;
  }
};

export default loanReducer;
