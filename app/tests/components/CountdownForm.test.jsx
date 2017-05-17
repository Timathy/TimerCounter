var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var jQuery = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// Load component
const CountdownForm = require('CountdownForm');

describe('Countdown Form', function () {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds are entered', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = jQuery(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '209';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(209);
  });

  it('should not call onSetCountdown if invalid seconds are entered', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = jQuery(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = 'a123d';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
