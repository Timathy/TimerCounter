var React = require('react');

const TimerControls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  },

  render: function () {
    var { countdownStatus } = this.props;

    var displayPauseStartButton = () => {
      if (countdownStatus === 'started') {
        return <button className="hollow button warning" onClick={this.onStatusChange('paused')}>Pause</button>;
      } else if (countdownStatus === 'paused') {
        return <button className="hollow button primary" onClick={this.onStatusChange('started')}>Start</button>;
      } else if (countdownStatus === 'stopped') {
        return <button className="hollow button primary" onClick={this.onStatusChange('started')}>Start</button>;
      }
    };

    return (
      <div className="controls">
        {displayPauseStartButton()}
        <button className="hollow button alert" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = TimerControls;
