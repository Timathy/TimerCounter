var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var jQuery = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// Load component
var Clock = require('Clock');

describe('Clock component', function () {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', function () {
    it('should render clock', () => {
      var clock = TestUtils.renderIntoDocument(<Clock seconds={69}/>);
      var $el = jQuery(ReactDOM.findDOMNode(clock));
      var actual = $el.find('.clock-text').text();

      expect(actual).toBe('00:01:09');
    });
  });

  describe('Format seconds', function () {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 1000;
      var expected = '00:16:40';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should have leading 0 in minutes and seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 68;
      var expected = '00:01:08';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
