import React, { Component } from "react";
import { connect } from "react-redux";
import { stateMapper } from "../redux/store";
import { topTenMember } from "../redux/actions/loanActions";
import MyCard from "../components/MyCard";

class TopTenMember extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(topTenMember());
  }

  render() {
    const { topTen } = this.props.topTen;
    console.log(this.props);
    if (!topTen) {
      return <div>Loading Data...</div>;
    } else {
      return (
        <div className="container">
          <div className="row mb-4 mt-4">
            {topTen.map(item => {
              return (
                <MyCard
                  clickFunc={this.getMemberData}
                  key={item.member_id}
                  className="col-3"
                  member={item.member_id}
                  loanAmmount={item.loan_amnt}
                  term={item.term}
                  intRate={item.int_rate}
                  installment={item.installment}
                  varificationOfficer={item.emp_title}
                  issueDate={item.issue_d}
                  loanStatus={item.loan_status}
                  homeOwnership={item.home_ownership}
                />
              );
            })}
          </div>
        </div>
      );
    }
  }
}

TopTenMember = connect(stateMapper)(TopTenMember);
export default TopTenMember;
