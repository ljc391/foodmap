'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = require('../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('path', {
  d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'
}); /* eslint-disable */

var Check = function Check(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
Check = (0, _pure2.default)(Check);
Check.muiName = 'SvgIcon';

exports.default = Check;