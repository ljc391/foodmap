'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _createHelper = require('recompose/createHelper');

var _createHelper2 = _interopRequireDefault(_createHelper);

var _createEagerFactory = require('recompose/createEagerFactory');

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withStyles = function withStyles(styleSheet) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);

    var WithStyle = function WithStyle(ownerProps, context) {
      return factory((0, _extends3.default)({
        classes: context.styleManager.render(styleSheet)
      }, ownerProps));
    };

    WithStyle.contextTypes = {
      styleManager: _customPropTypes2.default.muiRequired
    };

    return WithStyle;
  };
}; //  weak

exports.default = (0, _createHelper2.default)(withStyles, 'withStyles');