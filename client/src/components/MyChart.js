import React, { PureComponent } from "react";
import axios from "axios";
import Animation from "./Animation";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      year: "2011",
      varificationStatus: "Verified",
      loanStatus: "Fully Paid"
    };
  }

  selectChangeHandler = event => {
    this.setState({
      year: event.target.year,
      varificationStatus: event.target.varificationStatus,
      loanStatus: event.target.loanStatus
    });
  };

  handleOnClick = event => {
    event.preventDefault();
    var inputs = {
      selectedYear: document.querySelector("#yearSelect").value,
      selectedvarificationStatus: document.querySelector("#varificationStatus")
        .value,
      selectedloanStatus: document.querySelector("#loanStatus").value
    };
    this.setState({ ...this.state, data: null });
    axios
      .get(
        "/api/loan/plot-chart?a=" +
          inputs.selectedYear +
          "&b=" +
          inputs.selectedvarificationStatus +
          "&c=" +
          inputs.selectedloanStatus +
          ""
      )
      .then(result => {
        console.log(result);
        this.setState(this.setState({ ...this.state, data: result.data }));
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios
      .get("/api/loan/plot-chart?a=2013&b=Verified&c=Fully Paid")
      .then(result => {
        console.log(result);
        this.setState({ ...this.state, data: result.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <div className="row justify-content-center mt-5">
          <form className="form-inline ">
            <div className="form-group mb-2">
              <label htmlFor="staticEmail2" className="sr-only">
                Email
              </label>
              <select
                className="form-control"
                name="year"
                id="yearSelect"
                onChange={this.selectChangeHandler}
                value={this.state.year}
              >
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
              </select>
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="inputPassword2" className="sr-only">
                Password
              </label>
              <select
                className="form-control"
                name="varificationStatus"
                id="varificationStatus"
                onChange={this.selectChangeHandler}
                value={this.state.varificationStatus}
              >
                <option value="Verified">Verified</option>
                <option value="Not Verified">Not Verified</option>
                <option value="Source Verified">Source Verified</option>
              </select>
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="inputPassword2" className="sr-only">
                Password
              </label>
              <select
                className="form-control"
                name="loanStatus"
                id="loanStatus"
                onChange={this.selectChangeHandler}
                value={this.state.loanStatus}
              >
                <option value="Fully Paid">Fully Paid</option>
                <option value="Charged Off">Charged Off</option>
                <option value="Current">Current</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary mb-2"
              onClick={this.handleOnClick}
            >
              Filter
            </button>
          </form>
        </div>

        <div>
          {this.state.data ? (
            <BarChart
              width={1080}
              height={400}
              data={this.state.data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="memberId" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="annualIncome" stackId="a" fill="#8884d8" />
              <Bar dataKey="lastPayment" stackId="a" fill="#82ca9d" />
              <Bar dataKey="loanAmount" fill="#ffc658" />
            </BarChart>
          ) : (
            <Animation />
          )}
        </div>
      </div>
    );
  }
}

// axios
//   .get(
//     "/api/loan/plot-chart?a=" +
//       inputs.selectedYear +
//       "&b=" +
//       inputs.selectedvarificationStatus +
//       "&c=" +
//       inputs.selectedloanStatus +
//       ""
//   )
//   .then(result => console.log(result))
//   .catch(err => console.log(err));
