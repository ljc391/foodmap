'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRippleHandler = exports.TouchRipple = exports.Ripple = exports.default = undefined;

var _rippleHandler = require('./rippleHandler');

Object.defineProperty(exports, 'createRippleHandler', {
  enumerable: true,
  get: function get() {
    return _rippleHandler.createRippleHandler;
  }
});

var _Ripple2 = require('./Ripple');

var _Ripple3 = _interopRequireDefault(_Ripple2);

var _TouchRipple2 = require('./TouchRipple');

var _TouchRipple3 = _interopRequireDefault(_TouchRipple2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Ripple3.default; /* eslint-disable flowtype/require-valid-file-annotation */

exports.Ripple = _Ripple3.default;
exports.TouchRipple = _TouchRipple3.default;