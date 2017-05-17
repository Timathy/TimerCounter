var React = require('react');

const Clock = React.createClass({
  getDefaultProps: function () {
    seconds: 0
  },

  propTypes: function () {
    seconds: React.PropTypes.number
  },

  formatSeconds: function (seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - (hours * 3600)) / 60);
    var sec = seconds - (hours * 3600) - (minutes * 60);

    /*
     * If the hours are less than 10, add a leadning zero to it,
     * meaning that, if the hour is 1, it becomes '01', '02'...'09';
     * The same principle goes for the minutes and seconds, thus
     * if either the minutes or seconds are less than 10,
     * add that leading 0, making them look like the hours,
     * '01', '02', '03'...'09'
     *
     * example: 11:01:34 am, the leading 0 is added to minute '1'
     * making it be '01'.
     * example 2: 09:04:04 am,
     * example 3: 00:09:03 am,
    */
    if (hours < 10) {
      hours = '0' + hours;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (sec < 10) {
      sec = '0' + sec;
    }

    return hours + ':' + minutes + ':' + sec;
  },

  render: function () {
    var { seconds } = this.props;
    return (
      <div className="clock">
        <span className="clock-text">{this.formatSeconds(seconds)}</span>
      </div>
    );
  }
});

module.exports = Clock;
