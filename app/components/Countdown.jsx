var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function () {
    return (
      <div>
        <Clock seconds={129}/>
      </div>
    );
  }
});

module.exports = Countdown;
