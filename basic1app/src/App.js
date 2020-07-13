import React, { Component } from 'react';
import { connect } from "react-redux";
import { increment, decrement } from "./actions/counterActions";

class App extends Component {
  render() {
    return (
      <div>
        Clicked: { this.props.count } times.
        <button
          onClick={ this.props.increment }
        >
          +
        </button>
        <button
          onClick={ this.props.decrement }
        >
          -
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
