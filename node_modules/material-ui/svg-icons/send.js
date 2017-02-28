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
  d: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z'
}); /* eslint-disable */

var ContentSend = function ContentSend(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
ContentSend = (0, _pure2.default)(ContentSend);
ContentSend.muiName = 'SvgIcon';

exports.default = ContentSend;