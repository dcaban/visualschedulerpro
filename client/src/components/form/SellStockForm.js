import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { Dropdown, Header, List, Grid } from "semantic-ui-react";
import { Form, Message } from "semantic-ui-react";

import { isPositiveInt } from "./helperFunctions";

import { team } from "../../actions/user";

import renderFields from "./renderFields";

// Input fields to render
const inputFields = [{ name: "numberOfShares", type: "number" }];

// Form validationg for redux-form
const validate = (formProps, props) => {
  const errors = {};

  const numberOfShares = parseFloat(formProps.numberOfShares);

  if (!isPositiveInt(numberOfShares)) {
    errors.numberOfShares = "Please enter a valid number of shares.";
  }

  return errors;
};

// Create array of stock selection dropdown options from daily
const mapStockOptions = daily => {
  return daily.map(stock => {
    return {
      key: stock.stockSymbol,
      value: stock.stockSymbol,
      text: stock.stockSymbol
    };
  });
};

class TeamForm extends Component {
  state = { stockOptions: [], selectedStock: null, teamSuccess: false };

  componentDidMount() {
    this.setState({ stockOptions: mapStockOptions(this.props.daily) });
  }

  handleStockSelection = (e, { value }) => {
    this.props.daily.forEach(stock => {
      if (stock.stockSymbol === value) {
        this.setState({ selectedStock: stock });
      }
    });
  };

  handleFormSubmit = formProps => {
    this.props.team(
      this.state.selectedStock.stockSymbol,
      formProps.numberOfShares
    );
  };

  renderSelectedStockInfo = () => {
    const stock = this.state.selectedStock;

    if (stock) {
      return (
        <List divided>
          <List.Item>
            <List.Header>Stock Symbol</List.Header>
            {stock.stockSymbol}
          </List.Item>
          <List.Item>
            <List.Header>Name</List.Header>
            {stock.stockName}
          </List.Item>
          <List.Item>
            <List.Header>Shares Owned</List.Header>
            {stock.totalShares}
          </List.Item>
          <List.Item>
            <List.Header>Current Price</List.Header>
            {`$${stock.price.toFixed(2)}`}
          </List.Item>
          <List.Item>
            <List.Header>Total Value</List.Header>
            {`$${stock.total.toFixed(2)}`}
          </List.Item>
        </List>
      );
    }
  };

  renderTeamForm = () => {
    const stock = this.state.selectedStock;
    const { handleSubmit, teamErrorMessage } = this.props;
    const teamContainsError = teamErrorMessage.length > 0;

    if (stock) {
      return (
        <Form
          error={teamContainsError}
          onSubmit={handleSubmit(this.handleFormSubmit)}
        >
          {renderFields(inputFields)}
          <Form.Button>Team Stock</Form.Button>
          <Message error content={teamErrorMessage} />
        </Form>
      );
    }
  };

  render() {
    const { stockOptions } = this.state;

    return (
      <Grid stackable columns={2} divided>
        <Grid.Column>
          <Header size="medium">Stock to team</Header>
          <Dropdown
            placeholder="Select a Stock"
            search
            selection
            fluid
            options={stockOptions}
            onChange={this.handleStockSelection}
          />
          <br />
          {this.renderTeamForm()}
        </Grid.Column>
        <Grid.Column>
          <Header size="medium">Selected Stock Info</Header>
          {this.renderSelectedStockInfo()}
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return { teamErrorMessage: state.auth.error };
};

const createForm = reduxForm({
  form: "team",
  validate
});

export default connect(mapStateToProps, { team })(
  createForm(TeamForm)
);
