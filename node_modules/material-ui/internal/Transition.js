'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _properties = require('dom-helpers/transition/properties');

var _properties2 = _interopRequireDefault(_properties);

var _on = require('dom-helpers/events/on');

var _on2 = _interopRequireDefault(_on);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transitionEndEvent = _properties2.default.end; //  weak

var UNMOUNTED = exports.UNMOUNTED = 0;
var EXITED = exports.EXITED = 1;
var ENTERING = exports.ENTERING = 2;
var ENTERED = exports.ENTERED = 3;
var EXITING = exports.EXITING = 4;

var propTypes = {
  /**
   * The content of the component.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * CSS class or classes applied when the component is entered
   */
  enteredClassName: _react.PropTypes.string,
  /**
   * CSS class or classes applied while the component is entering
   */
  enteringClassName: _react.PropTypes.string,
  /**
   * CSS class or classes applied when the component is exited
   */
  exitedClassName: _react.PropTypes.string,
  /**
   * CSS class or classes applied while the component is exiting
   */
  exitingClassName: _react.PropTypes.string,
  /**
   * Show the component; triggers the enter or exit animation
   */
  in: _react.PropTypes.bool,
  /**
   * Callback fired before the "entering" classes are applied
   */
  onEnter: _react.PropTypes.func,
  /**
   * Callback fired after the "entering" classes are applied
   */
  onEntering: _react.PropTypes.func,
  /**
   * Callback fired after the "enter" classes are applied
   */
  onEntered: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired before the "exiting" classes are applied
   */
  onExit: _react.PropTypes.func,
  /**
   * Callback fired after the "exiting" classes are applied
   */
  onExiting: _react.PropTypes.func,
  /**
   * Callback fired after the "exited" classes are applied
   */
  onExited: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * @ignore
   */
  onRequestTimeout: _react.PropTypes.func,
  /**
   * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
   * transition indefinately if the browser transitionEnd events are
   * canceled or interrupted.
   *
   * By default this is set to a high number (5 seconds) as a failsafe. You should consider
   * setting this to the duration of your animation (or a bit above it).
   */
  timeout: _react.PropTypes.number,
  /**
   * Run the enter animation when the component mounts, if it is initially
   * shown
   */
  transitionAppear: _react.PropTypes.bool,
  /**
   * Unmount the component (remove it from the DOM) when it is not shown
   */
  unmountOnExit: _react.PropTypes.bool
};

/**
 * Drawn from https://raw.githubusercontent.com/react-bootstrap/react-overlays/master/src/Transition.js
 *
 * The Transition component lets you define and run css transitions with a simple declarative api.
 * It works similar to React's own CSSTransitionGroup
 * but is specifically optimized for transitioning a single child "in" or "out".
 *
 * You don't even need to use class based css transitions if you don't want to (but it is easiest).
 * The extensive set of lifecyle callbacks means you have control over
 * the transitioning now at each step of the way.
 */

var Transition = function (_Component) {
  (0, _inherits3.default)(Transition, _Component);

  function Transition() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Transition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Transition.__proto__ || (0, _getPrototypeOf2.default)(Transition)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      status: UNMOUNTED
    }, _this.nextCallback = null, _this.needsUpdate = false, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Transition, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var status = void 0;

      if (this.props.in) {
        // Start enter transition in componentDidMount.
        status = this.props.transitionAppear ? EXITED : ENTERED;
      } else {
        status = this.props.unmountOnExit ? UNMOUNTED : EXITED;
      }

      this.setState({ status: status });
      this.nextCallback = null;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.transitionAppear && this.props.in) {
        this.performEnter(this.props);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.in && this.props.unmountOnExit) {
        if (this.state.status === UNMOUNTED) {
          // Start enter transition in componentDidUpdate.
          this.setState({ status: EXITED });
        }
      } else {
        this.needsUpdate = true;
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.in && this.state.status === EXITED && this.state.status === nextState.status) {
        return false;
      }

      return true;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var status = this.state.status;

      if (this.props.unmountOnExit && status === EXITED) {
        // EXITED is always a transitional state to either ENTERING or UNMOUNTED
        // when using unmountOnExit.
        if (this.props.in) {
          this.performEnter(this.props);
        } else {
          this.setState({ status: UNMOUNTED }); // eslint-disable-line react/no-did-update-set-state
        }

        return;
      }

      // guard ensures we are only responding to prop changes
      if (this.needsUpdate) {
        this.needsUpdate = false;

        if (this.props.in) {
          if (status === EXITING) {
            this.performEnter(this.props);
          } else if (status === EXITED) {
            this.performEnter(this.props);
          }
          // Otherwise we're already entering or entered.
        } else if (status === ENTERING || status === ENTERED) {
          this.performExit(this.props);
        }
        // Otherwise we're already exited or exiting.
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.cancelNextCallback();
    }
  }, {
    key: 'performEnter',
    value: function performEnter(props) {
      var _this2 = this;

      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);

      // Not this.props, because we might be about to receive new props.
      if (props.onEnter.length === 2) {
        return props.onEnter(node, function () {
          return _this2.performEntering(node);
        });
      }

      props.onEnter(node);
      return this.performEntering(node);
    }
  }, {
    key: 'performEntering',
    value: function performEntering(node) {
      var _this3 = this;

      this.safeSetState({ status: ENTERING }, function () {
        _this3.props.onEntering(node);

        _this3.onTransitionEnd(node, function () {
          _this3.safeSetState({ status: ENTERED }, function () {
            _this3.props.onEntered(node);
          });
        });
      });
    }
  }, {
    key: 'performExit',
    value: function performExit(props) {
      var _this4 = this;

      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);

      // Not this.props, because we might be about to receive new props.
      props.onExit(node);

      this.safeSetState({ status: EXITING }, function () {
        _this4.props.onExiting(node);

        _this4.onTransitionEnd(node, function () {
          _this4.safeSetState({ status: EXITED }, function () {
            _this4.props.onExited(node);
          });
        });
      });
    }
  }, {
    key: 'cancelNextCallback',
    value: function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    }
  }, {
    key: 'safeSetState',
    value: function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      this.setState(nextState, this.setNextCallback(callback));
    }
  }, {
    key: 'setNextCallback',
    value: function setNextCallback(callback) {
      var _this5 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this5.nextCallback = null;

          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    }
  }, {
    key: 'onTransitionEnd',
    value: function onTransitionEnd(node, handler) {
      var _this6 = this;

      this.setNextCallback(handler);

      if (node) {
        (0, _on2.default)(node, transitionEndEvent, function (event) {
          if (event.target === node && _this6.nextCallback) {
            _this6.nextCallback();
          }
        });
        setTimeout(this.nextCallback, this.getTimeout(node));
      } else {
        setTimeout(this.nextCallback, 0);
      }
    }
  }, {
    key: 'getTimeout',
    value: function getTimeout(node) {
      var timeout = void 0;

      if (this.props.onRequestTimeout) {
        timeout = this.props.onRequestTimeout(node);
      }

      if (typeof timeout !== 'number') {
        timeout = this.props.timeout;
      }

      return timeout;
    }
  }, {
    key: 'render',
    value: function render() {
      var status = this.state.status;
      if (status === UNMOUNTED) {
        return null;
      }

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

      (0, _keys2.default)(propTypes).forEach(function (key) {
        return delete other[key];
      });

      var transitionClassName = void 0;
      if (status === EXITED) {
        transitionClassName = this.props.exitedClassName;
      } else if (status === ENTERING) {
        transitionClassName = this.props.enteringClassName;
      } else if (status === ENTERED) {
        transitionClassName = this.props.enteredClassName;
      } else if (status === EXITING) {
        transitionClassName = this.props.exitingClassName;
      }

      var child = _react2.default.Children.only(children);
      return _react2.default.cloneElement(child, (0, _extends3.default)({
        className: (0, _classnames2.default)(child.props.className, className, transitionClassName)
      }, other));
    }
  }]);
  return Transition;
}(_react.Component);

// Name the function so it is clearer in the documentation


Transition.defaultProps = {
  in: false,
  unmountOnExit: false,
  transitionAppear: false,
  timeout: 5000,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
process.env.NODE_ENV !== "production" ? Transition.propTypes = propTypes : void 0;
function noop() {}

exports.default = Transition;