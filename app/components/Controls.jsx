var React = require('react');

const Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },

  render: function () {
    var { countdownStatus } = this.props;
    var pauseStartButton = () => {
      if (countdownStatus === 'started') {
        return <button className="hollow button warning">Pause</button>;
      } else if (countdownStatus === 'paused') {
        return <button className="hollow button primary">Start</button>;
      }
    };

    return (
      <div className="controls">
        {pauseStartButton()}
        <button className="hollow button alert">Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
