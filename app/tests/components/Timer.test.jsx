var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var jQuery = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// Load component
const Timer = require('Timer');

describe('Timer', function () {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('render', function () {
    it('should start timer', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout( () => {
        expect(timer.state.count).toBe(3);
        done();
      }, 3001);
    });

    it('should pause timer', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout( () => {
        expect(timer.state.count).toBe(4);
        timer.handleStatusChange('paused');
        expect(timer.state.countdownStatus).toBe('paused');
        done();
      }, 4001);
    });

    it('should clear timer', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout( () => {
        timer.handleStatusChange('stopped');
        expect(timer.state.countdownStatus).toBe('stopped');
        expect(timer.state.count).toBe(0);
        done();
      }, 2001);
    });
  });
});
