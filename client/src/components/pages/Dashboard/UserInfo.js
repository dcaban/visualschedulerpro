import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import axios from "axios";
import cookie from "react-cookie";
import { Header, List, Grid } from "semantic-ui-react";

import { calcTotalValue } from "./helperFunctions";
import { API_URL } from "../../../constants";

class UserInfo extends Component {
  state = {
    totalValue: null
  };

  componentDidMount() {
    this.fetchDailyAndSetTotalValue();
  }

  fetchDailyAndSetTotalValue = () => {
    const token = cookie.load("token");

    axios
      .get(`${API_URL}/user/daily`, {
        headers: { Authorization: token }
      })
      .then(response => {
        // calculate total value
        const totalValue = calcTotalValue(response.data.daily);

        this.setState({
          totalValue: totalValue
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  renderUserInfo = () => {
    const { firstName, lastName, username, joined } = this.props.user;

    // format joined date (ex: "July 2nd, 1953")
    const joinedDate = moment(joined).format("MMMM Do, YYYY");

    return (
      <List divided>
        <List.Item>
          <List.Header>Username</List.Header>
          {username}
        </List.Item>
        <List.Item>
          <List.Header>First Name</List.Header>
          {firstName}
        </List.Item>
        <List.Item>
          <List.Header>Last Name</List.Header>
          {lastName}
        </List.Item>
        <List.Item>
          <List.Header>Joined</List.Header>
          {joinedDate}
        </List.Item>
      </List>
    );
  };


  render() {
    return (
      <Grid stackable columns={2} divided>
        <Grid.Column>
          <Header dividing size="medium">
            User Information
          </Header>
          {this.renderUserInfo()}
        </Grid.Column>
        <Grid.Column>
          <Header dividing size="medium">
            Does not need to be here
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(UserInfo);
