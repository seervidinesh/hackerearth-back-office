import React, { Component } from "react";
import { connect } from "react-redux";

import { stateMapper } from "../redux/store";
import { getSingleMember } from "../redux/actions/loanActions";

class Member extends Component {
  componentDidMount() {
    var memberId = this.props.match.params.memberId;
    this.props.dispatch(getSingleMember(memberId));
  }
  render() {
    const { member } = this.props.member;
    console.log(member);
    if (!member) {
      return <div>Loading member Data...</div>;
    }
    return (
      <div className="contsiner m-5">
        <div className="card ">
          <div className="card-header text-center ">{member.member_id}</div>
          <div className="card-body">
            <h5 className="card-title">
              <span>
                Loan Amount : {member.loan_amnt} &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span>Term : {member.term} &nbsp;&nbsp;&nbsp;&nbsp; </span>
              <span>
                Intrest Rate : {member.int_rate} &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span>
                Varification Status : {member.verification_status}{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span>Annual Income : {member.annual_inc}</span>
            </h5>
            <p className="card-text">{member.desc}</p>
            <h6 className="card-title">
              <span>
                Funded Amount : {member.funded_amnt_inv}{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span>
                Installment : {member.installment} &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span>Grade : {member.grade} &nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>
                Employ Title : {member.emp_title} &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span>
                Employed Since : {member.emp_length} &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span>
                Home Ownership : {member.home_ownership}{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <br />
              <span>
                Issue Date : {member.issue_d} &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span>
                Loan Status : {member.loan_status} &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span>Purpose : {member.purpose} &nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>Title : {member.title} &nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>State : {member.addr_state} &nbsp;&nbsp;&nbsp;&nbsp;</span>
            </h6>
          </div>
          <div className="card-footer text-muted text-center">
            <span>
              Last Payment : {member.last_pymnt_d} &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>
              Ammount : {member.last_pymnt_amnt} &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Member = connect(stateMapper)(Member);
export default Member;
