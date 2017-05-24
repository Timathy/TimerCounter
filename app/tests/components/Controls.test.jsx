var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var jQuery = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// Load component
var Controls = require('Controls');

describe('Controls', function () {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', function () {
    it('should set pause button when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      var $el = jQuery(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should set start button when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      var $el = jQuery(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
});
