var React = require('react');
var { Link, IndexLink } = require('react-router');

const Nav = React.createClass({
  render: function () {
    return (
      // Set the top-bar class from Foundation
      <div className="top-bar">

        {/* Set the top-bar-left class from Foundation */}
        <div className="top-bar-left">
          {/* Set the menu */}
          <ul className="menu">
            <li className="menu-text navbar-text-title">TimerCounter</li>

            {/* Set the links */}
            <li>
              <IndexLink to="/" className="link-color-style" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>

            <li>
              <Link to="/countdown" className="link-color-style" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>

        {/* Set the top-bar-right class from Foundation */}
        <div className="top-bar-right">
          {/* Set the menu */}
          <ul className="menu">
            <li className="menu text navbar-text-title"><span>Developed by</span></li>

            {/* Link to github */}
            <li>
              <a className="github-color-style" href="https://github.com/Timathy">Timathy</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
