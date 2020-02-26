import axios from "axios";

import { GET_LOAN_DATA, GET_MEMBER_DATA, TOP_TEN_MEMBER } from "./types";

// Register User

export const getLoanData = pageNo => dispatch => {
  axios
    .get("/api/loan/all/" + pageNo)
    .then(res =>
      dispatch({
        type: GET_LOAN_DATA,
        result: res.data.result,
        pageInfo: res.data.pageInfo
      })
    )
    .catch(err => console.log(err));
};

export const getSingleMember = memberId => dispatch => {
  axios
    .get("/api/loan/getmemberdetail/" + memberId)
    .then(res => {
      dispatch({
        type: GET_MEMBER_DATA,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const topTenMember = () => dispatch => {
  axios
    .get("/api/loan/topten")
    .then(res =>
      dispatch({
        type: TOP_TEN_MEMBER,
        result: res.data
      })
    )
    .catch(err => console.log(err));
};
