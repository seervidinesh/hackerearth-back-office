import React, { Component } from "react";
import { Link } from "react-router-dom";

class MyCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        className={"card bg-light p-3 " + this.props.className}
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">
            Member id : {this.props.member} &nbsp; ₹ {this.props.loanAmmount}
          </h5>
          <div>
            <span>Term : {this.props.term} </span> <br />
            <span>Intrest Rate : {this.props.intRate} </span>
          </div>
          <div>
            <span>Installment : {this.props.installment} </span> <br />
            <span>Home Ownership : {this.props.homeOwnership} </span>
          </div>
          <div>
            <span>
              Varification Officer : {this.props.varificationOfficer}{" "}
            </span>{" "}
            <br />
            <span>Issue Date : {this.props.issueDate} </span>
          </div>
          <div>
            <span>Loan Status : {this.props.loanStatus} </span>
          </div>
        </div>
        <Link to={"/member/" + this.props.member}>
          <button className="btn btn-primary">View Member Details</button>
        </Link>
      </div>
    );
  }
}
export default MyCard;
