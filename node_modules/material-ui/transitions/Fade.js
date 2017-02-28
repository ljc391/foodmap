'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Transition = require('../internal/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _transitions = require('../styles/transitions');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var Fade = function (_Component) {
  (0, _inherits3.default)(Fade, _Component);

  function Fade() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Fade);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Fade.__proto__ || (0, _getPrototypeOf2.default)(Fade)).call.apply(_ref, [this].concat(args))), _this), _this.handleEnter = function (element) {
      element.style.opacity = 0;
      var transitions = _this.context.theme.transitions;

      element.style.transition = transitions.create('opacity', {
        duration: _this.props.enterTransitionDuration
      });
      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }
    }, _this.handleEntering = function (element) {
      element.style.opacity = 1;
      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }
    }, _this.handleExit = function (element) {
      var transitions = _this.context.theme.transitions;

      element.style.transition = transitions.create('opacity', {
        duration: _this.props.leaveTransitionDuration
      });
      element.style.opacity = 0;
      if (_this.props.onExit) {
        _this.props.onExit(element);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Fade, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          enterTransitionDuration = _props.enterTransitionDuration,
          leaveTransitionDuration = _props.leaveTransitionDuration,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterTransitionDuration', 'leaveTransitionDuration', 'onEnter', 'onEntering', 'onExit']);


      return _react2.default.createElement(
        _Transition2.default,
        (0, _extends3.default)({
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onExit: this.handleExit
        }, other),
        children
      );
    }
  }]);
  return Fade;
}(_react.Component);

Fade.defaultProps = {
  in: false,
  enterTransitionDuration: _transitions.duration.enteringScreen,
  leaveTransitionDuration: _transitions.duration.leavingScreen
};
Fade.contextTypes = {
  theme: _customPropTypes2.default.muiRequired
};
exports.default = Fade;
process.env.NODE_ENV !== "production" ? Fade.propTypes = {
  children: _react.PropTypes.node,
  /**
   * Set to true to transition in.
   */
  in: _react.PropTypes.bool,
  /**
   * Duration of the animation when the element is entering the screen.
   */
  enterTransitionDuration: _react.PropTypes.number, // eslint-disable-line react/sort-prop-types
  /**
   * Duration of the animation when the element is leaving the screen.
   */
  leaveTransitionDuration: _react.PropTypes.number,
  /**
   * Callback fired before the component is entering.
   */
  onEnter: _react.PropTypes.func,
  /**
   * Callback fired when the component is entering.
   */
  onEntering: _react.PropTypes.func,
  /**
   * Callback fired when the component has entered.
   */
  onEntered: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired before the component is exiting.
   */
  onExit: _react.PropTypes.func,
  /**
   * Callback fired when the component is exiting.
   */
  onExiting: _react.PropTypes.func,
  /**
   * Callback fired when the component has exited.
   */
  onExited: _react.PropTypes.func } : void 0;