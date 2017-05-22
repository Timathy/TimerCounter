var React = require('react');

const CountdownForm = React.createClass({
  onSubmit: function (event) {
    event.preventDefault();
    var stringSeconds = this.refs.seconds.value;

    // If the string value is not empty or its length is
    // greater than 0, then execute the code, if it isn't
    // throw an error
    if (stringSeconds !== '' || stringSeconds.length > 0) {
      if (stringSeconds.match(/^[0-9]*$/)) {
        this.refs.seconds.value = '';
        this.props.onSetCountdown(parseInt(stringSeconds, 10));
      }

      if (parseInt(stringSeconds, 10) > 86400) {
        alert('Please enter a valid amount of seconds.');
      }
    } else {
      alert('Please enter a valid amount of seconds.');
    }

  },

  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <div>
            <input type="text" ref="seconds" placeholder="Enter time interval in seconds"/>
          </div>

          <div>
            <button className="hollow button primary expanded">Start</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
