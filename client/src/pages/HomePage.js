import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import axios from "axios";

import MyChart from "../components/MyChart";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memberId: "",
      idErr: ""
    };
  }

  handleInput = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  onSubmit = event => {
    const postData = {
      memberId: this.state.memberId
    };
    event.preventDefault();
    axios
      .post("/api/loan/search-member", postData)
      .then(res => this.props.history.push("/member/" + res.data[0].member_id))
      .catch(err => this.setState({ idErr: err.response.data.memberId }));
  };

  render() {
    return (
      <div className="container m-5">
        <div className="row">
          <div className="col-3">
            <Link to="/top-ten-member">
              <button className="btn btn-success">Top 10 Member</button>
            </Link>
          </div>
          <div className="col-9">
            <form className="form-inline">
              <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="searchUser" className="sr-only">
                  Search User by id
                </label>
                <input
                  type="text"
                  name="memberId"
                  value={this.state.memberId}
                  className={classnames("form-control", {
                    "is-invalid": this.state.idErr
                  })}
                  id="searchUser"
                  placeholder="User Id"
                  onChange={this.handleInput}
                />
                {this.state.idErr && (
                  <div className="invalid-feedback"> {this.state.idErr} </div>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-2"
                onClick={this.onSubmit}
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <MyChart />
      </div>
    );
  }
}
export default HomePage;
