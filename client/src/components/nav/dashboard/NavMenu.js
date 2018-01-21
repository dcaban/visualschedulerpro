import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { kebabCase, camelCase, round } from "lodash";
import Moment from 'react-moment';

import "./NavMenu.css";

import { changeRoute } from "../../../actions/utility";

import MenuItem from "../MenuItem";

class NavMenu extends Component {
  navToRoute = (e, { name }) => {
    // convert name to dash case (ie. add-funds)
    const route = kebabCase(name);
    this.props.changeRoute(`/dashboard/${route}`);
  };

  renderMenuItems = () => {
    // extract active item from path after /dashboard/ and convert to camelcase
    const activeItem = camelCase(this.props.currentPath.slice(11));

    const date = this.props.date;

    const itemsToRender = [
      { name: "daily", onClick: this.navToRoute },
      { name: "history", onClick: this.navToRoute },
      { name: "buyStock", onClick: this.navToRoute },
      { name: "sellStock", onClick: this.navToRoute },
      { name: "addFunds", onClick: this.navToRoute },
      { name: "userInfo", onClick: this.navToRoute, position: "right" },
      {
        name: "funds",
        header: true,
        headerContent: <div>Today's Date: <Moment format="MM/DD/YYYY">
             {Date.now()}
            </Moment>
        </div>
      }
    ];

    return itemsToRender.map(item =>
      <MenuItem {...item} active={activeItem === item.name} key={item.name} />
    );
  };

  render() {
    return (
      <Menu tabular attached="top" className="dashboard-nav">
        {this.renderMenuItems()}
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPath: state.router.location.pathname,
    date: Date.now()
  };
};

export default connect(mapStateToProps, { changeRoute })(NavMenu);
