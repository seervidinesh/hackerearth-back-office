import { GET_MEMBER_DATA } from "../actions/types";

const memberReducer = (member = {}, action) => {
  switch (action.type) {
    case GET_MEMBER_DATA:
      return {
        ...member,
        member: action.payload
      };
    default:
      return member;
  }
};

export default memberReducer;
