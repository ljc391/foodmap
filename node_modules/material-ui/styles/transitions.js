'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duration = exports.easing = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easingInternal = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)'
};

// Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
//  weak
/* eslint-disable no-param-reassign */

var durationInternal = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

var formatMs = function formatMs(miliseconds) {
  return Math.round(miliseconds) + 'ms';
};
var isString = function isString(value) {
  return typeof value === 'string';
};
var isNumber = function isNumber(value) {
  return !isNaN(parseFloat(value));
};

/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
*/
exports.default = {
  easing: easingInternal,

  duration: durationInternal,

  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? durationInternal.standard : _ref$duration,
        _ref$easing = _ref.easing,
        easing = _ref$easing === undefined ? easingInternal.easeInOut : _ref$easing,
        _ref$delay = _ref.delay,
        delay = _ref$delay === undefined ? 0 : _ref$delay,
        other = (0, _objectWithoutProperties3.default)(_ref, ['duration', 'easing', 'delay']);

    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(isString(props) || Array.isArray(props), 'argument "props" must be a string or Array') : void 0;
    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(isNumber(duration), 'argument "duration" must be a number') : void 0;
    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(isString(easing), 'argument "easing" must be a string') : void 0;
    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(isNumber(delay), 'argument "delay" must be a string') : void 0;
    process.env.NODE_ENV !== "production" ? (0, _warning2.default)((0, _keys2.default)(other).length === 0, 'unrecognized argument(s) [' + (0, _keys2.default)(other).join(',') + ']') : void 0;

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return animatedProp + ' ' + formatMs(duration) + ' ' + easing + ' ' + formatMs(delay);
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36;
    var duration = (4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10;

    return Math.round(duration);
  }
};

/**
 * @deprecated Will be removed, please access via theme.transitions.easing
 */

var easing = exports.easing = easingInternal;
/**
 * @deprecated Will be removed, please access via theme.transitions.duration
 */
var duration = exports.duration = durationInternal;