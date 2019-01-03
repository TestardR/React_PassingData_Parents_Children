import React, { Component } from 'react';
import CounterDisplay from './CounterDisplay';
import ButtonToggle from './ButtonToggle';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      counter: 0
    };
  }
  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };
  handleIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };
  handleDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  };
  render() {
    // const nameDisplay = 'Counter Display';

    return (
      <>
        <CounterDisplay
          title="Counter"
          description={{
            text: 'This is a counter, it increments and decrements'
          }}
          counter={this.state.counter}
        />
        <button onClick={e => this.handleIncrement(e)}>+</button>
        <button onClick={e => this.handleDecrement(e)}>-</button>
        {this.state.isShow ? (
          <CounterDisplay
            title="Counter"
            description={{
              text: 'This is a counter, it increments and decrements'
            }}
            counter={this.state.counter}
          />
        ) : null}

        <ButtonToggle onClick={this.toggleShow} />
      </>
    );
  }
}
