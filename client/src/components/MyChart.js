import React, { PureComponent } from "react";
import axios from "axios";
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
      data: [
        {
          name: "Page A",
          annualIncome: 4000,
          lastPayment: 2400,
          loanAmount: 2400
        },
        {
          name: "Page B",
          annualIncome: 3000,
          lastPayment: 1398,
          loanAmount: 2210
        },
        {
          name: "Page C",
          annualIncome: 2000,
          lastPayment: 9800,
          loanAmount: 2290
        },
        {
          name: "Page D",
          annualIncome: 2780,
          lastPayment: 3908,
          loanAmount: 2000
        },
        {
          name: "Page E",
          annualIncome: 1890,
          lastPayment: 4800,
          loanAmount: 2181
        },
        {
          name: "Page F",
          annualIncome: 2390,
          lastPayment: 3800,
          loanAmount: 2500
        },
        {
          name: "Page G",
          annualIncome: 3490,
          lastPayment: 4300,
          amt: 2100
        }
      ],
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
      .then(result =>
        this.setState(...this.state, {
          data: {
            memberId: result.data[0].member_id,
            loanAmount: result.data[0].loan_amnt,
            annualIncome: result.data[0].annual_inc,
            lastPayment: result.data[0].last_pymnt_amnt
          }
        })
      )
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios
      .get("/api/loan/plot-chart?a=2013&b=Verified&c=Fully Paid")
      .then(result =>
        this.setState(...this.state, {
          data: {
            memberId: result.data.member_id,
            loanAmount: result.data.loan_amnt,
            annualIncome: result.data.annual_inc,
            lastPayment: result.data.last_pymnt_amnt
          }
        })
      )
      .catch(err => console.log(err));
  }

  render() {
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
