import React, { Component } from "react";
import { connect } from "react-redux";
import { stateMapper } from "../redux/store";

import { getLoanData } from "../redux/actions/loanActions";
import MyCard from "../components/MyCard";
import Pagination from "../components/Pagination";

class AllMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1
    };
  }
  componentDidMount() {
    this.props.dispatch(getLoanData(this.state.pageNumber));
  }

  getPageData = event => {
    this.props.dispatch(getLoanData(event.currentTarget.textContent));
  };

  render() {
    const { loanData, pageInfo } = this.props.loan;
    console.log(this.props.loan);
    if (!loanData) {
      return <div>Loading Data...</div>;
    } else {
      return (
        <div className="container">
          <div className="row mb-4 mt-4">
            {loanData.map(item => {
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
            <Pagination
              clickFunc={this.getPageData}
              firstPage={pageInfo.firstPage}
              prevPage={pageInfo.prevPage ? pageInfo.prevPage : 1}
              currPage={pageInfo.currPage}
              nextPage={pageInfo.nextPage ? pageInfo.nextPage : 249}
              lastPage={pageInfo.totalPages}
            />
          </div>
        </div>
      );
    }
  }
}

AllMember = connect(stateMapper)(AllMember);
export default AllMember;
