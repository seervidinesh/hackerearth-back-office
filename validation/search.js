const Validator = require("validator");
const isEmpty = require("./is-Empty");

module.exports = validateSearchInput = data => {
  let errors = {};

  data.memberId = !isEmpty(data.memberId) ? data.memberId : "";

  if (!Validator.isNumeric(data.memberId)) {
    errors.memberId = "Member Id must be number";
  }
  if (Validator.isEmpty(data.memberId)) {
    errors.memberId = "Member Id is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
