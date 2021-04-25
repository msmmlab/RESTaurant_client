import React, { Component } from "react";
import { connect } from "react-redux";

class OrdersTable extends Component {
  componentDidMount() {}

  render() {
    return <div>List of all orders</div>;
  }
}

const mapStateToProps = (state) => {};

export default connect(null, {})(OrdersTable);
