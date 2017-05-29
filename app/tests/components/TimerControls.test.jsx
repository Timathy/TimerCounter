var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var jQuery = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// Load component
var TimerControls = require('TimerControls');

describe('TimerControls', function () {
  it('should exist', () => {
    expect(TimerControls).toExist();
  });

  describe('render', function () {
    it('should set pause button when started', () => {
      var timerControls = TestUtils.renderIntoDocument(<TimerControls countdownStatus='started'/>);
      var $el = jQuery(ReactDOM.findDOMNode(timerControls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should set start button when paused', () => {
      var timerControls = TestUtils.renderIntoDocument(<TimerControls countdownStatus='paused'/>);
      var $el = jQuery(ReactDOM.findDOMNode(timerControls));
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
});
