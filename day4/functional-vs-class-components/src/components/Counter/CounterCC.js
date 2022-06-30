import React from "react";
import PropTypes from "prop-types";

class CounterCC extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: props.start,
      amount: 1,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + this.state.amount,
    });
  };

  changeAmount = (data) => {
    this.setState({
      amount: data,
    });
  };

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click</button>

        <br />

        <h2>Amount: {this.state.amount}</h2>
        <button onClick={() => this.changeAmount(1)}>1</button>
        <button onClick={() => this.changeAmount(5)}>5</button>
        <button onClick={() => this.changeAmount(10)}>10</button>
      </div>
    );
  }
}

CounterCC.propTypes = {
  start: PropTypes.number,
};

export default CounterCC;
