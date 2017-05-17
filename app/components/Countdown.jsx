var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

const Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0
    };
  },

  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds
    });
    
    if (seconds > 86400) {
      this.setState({
        count: 0
      });
    }
  },

  render: function () {
    var { count } = this.state;

    return (
      <div>
        <Clock seconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
