import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Button } from "semantic-ui-react";

import { changeRoute } from "../../../actions/utility";

class NoStockInDaily extends Component {
  handleClick = () => {
    this.props.changeRoute("/dashboard/requests");
  };

  render() {
    return (
      <div>
        <Header size="medium">
          You currently have no stock in your daily.
        </Header>
        <Button onClick={this.handleClick}>Go to Buy Stock Form</Button>
      </div>
    );
  }
}

export default connect(null, { changeRoute })(NoStockInDaily);
