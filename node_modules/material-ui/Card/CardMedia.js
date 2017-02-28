'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = CardMedia;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiCardMedia', function () {
  return {
    cardMedia: {
      position: 'relative'
    }
  };
});

function CardMedia(props, context) {
  var classNameProp = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['className']);


  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.cardMedia, classNameProp);

  return _react2.default.createElement('div', (0, _extends3.default)({ className: className }, other));
}

process.env.NODE_ENV !== "production" ? CardMedia.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string
} : void 0;

CardMedia.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};