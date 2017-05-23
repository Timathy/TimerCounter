var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

const Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },

  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          clearInterval(this.timer);
          break;
      }
    }
  },

  startTimer: function () {
    this.timer = setInterval( () => {
      var newCount = this.state.count - 1;

      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({
          count: 0,
          countdownStatus: 'stopped'
        });
        // clearInterval(this.timer);
        //
        // this.timer = setTimeout( () => {
        //   this.startTimer();
        // }, 2000);
      }
    }, 1000);
  },

  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
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
