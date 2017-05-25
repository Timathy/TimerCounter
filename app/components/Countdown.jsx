var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

const Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },

  componentDidUpdate: function (prevProps, prevState) {
    // Check if the current state does not
    // equal to the previous state
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      /* If the case is set to started, start the timer;
       *
       * if the case is set to stopped, then set the count
       * to 0 and clear the interval;

       * if the case is set to paused, pause the countdown
       * using the clearInterval.
      */
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({ count: 0 });
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        case 'paused':
          clearInterval(this.timer);
          break;
      }
    }
  },

  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },

  startTimer: function () {
    // Set a variable and start the timer
    this.timer = setInterval( () => {
      // Set the new count to the updated state
      var newCount = this.state.count - 1;

      // Update the state with the new count
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      // If count state reaches 0, set countdownStatus to 'stopped'
      if (newCount === 0) {
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    }, 1000);
  },

  handleSetCountdown: function (seconds) {
    // Set the count state to equal to that of the
    // entered seconds in the form, and set the countdownStatus to 'started'
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });

    // If the user inputs more that 86400 seconds,
    // throw an alert and set the count to 0
    // and the countdownStatus to 'stopped'
    if (seconds > 86400) {
      this.setState({
        count: 0,
        countdownStatus: 'stopped'
      });
    }
  },

  handleStatusChange: function (newStatus) {
    // Update the state of the countdownStatus
    // countdownStatus = 'started'
    // or countdownStatus = 'paused'
    // or countdownStatus = 'stopped'
    this.setState({
      countdownStatus: newStatus
    });
  },

  render: function () {
    var { count, countdownStatus } = this.state;

    // Display the controls conditionally
    var displayControls = () => {
      // If the countdownStatus is not equal to 'stopped'
      // and the count is not equal to 0, then display the control buttons,
      // pause and start;
      // if the countdownStatus is equal to 'stopped',
      // then display the countdown form
      if (countdownStatus !== 'stopped' && count !== 0) {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };

    return (
      <div>
        <Clock seconds={count}/>
        {displayControls()}
      </div>
    );
  }
});

module.exports = Countdown;
