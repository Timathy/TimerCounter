var React = require('react');
var Clock = require('Clock');
var TimerControls = require('TimerControls');

const Timer = React.createClass({
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
      if (this.state.countdownStatus === 'started') {
        this.startTimer();
      } else if (this.state.countdownStatus === 'paused') {
        clearInterval(this.timer);
      } else if (this.state.countdownStatus === 'stopped') {
        this.setState({ count: 0, });
        clearInterval(this.timer);
        this.timer = undefined;
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
      var newCount = this.state.count + 1;

      // Update the state with the new count
      this.setState({
        count: newCount
      });

      // If count state reaches 86400 seconds, set countdownStatus to 'stopped'
      if (newCount > 86400) {
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    }, 1000);
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
    
    var displayControls = () => {
      if (countdownStatus) {
        return <TimerControls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      }
    };

    return (
      <div>
        <h1 className="menu-text text-center text-title">Timer</h1>
        <Clock seconds={count}/>
        {displayControls()}
      </div>
    );
  }
});

module.exports = Timer;
