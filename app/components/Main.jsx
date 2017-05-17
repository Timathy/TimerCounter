var React = require('react');
var Nav = require('Nav');

const Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns small-centered large-4 medium-6 small-12">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
