'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.default = TabIndicator;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiTabIndicator', function (theme) {
  return {
    root: {
      position: 'absolute',
      bottom: 0,
      height: 2,
      marginTop: -2,
      transition: theme.transitions.create(),
      willChange: 'left, width'
    },
    rootAccent: {
      backgroundColor: theme.palette.accent[500]
    }
  };
});

function TabIndicator(props, context) {
  var classNameProp = props.className,
      indicatorColor = props.indicatorColor,
      styleProp = props.style;

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.rootAccent, indicatorColor === 'accent'), classNameProp);

  var style = indicatorColor !== 'accent' ? (0, _extends3.default)({}, styleProp, {
    backgroundColor: indicatorColor
  }) : styleProp;

  return (0, _jsx3.default)('div', {
    className: className,
    style: style
  });
}

process.env.NODE_ENV !== "production" ? TabIndicator.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  indicatorColor: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['accent']), _react.PropTypes.string]).isRequired,
  /**
   * The style of the root element.
   */
  style: _react.PropTypes.shape({
    left: _react.PropTypes.number,
    width: _react.PropTypes.number
  }).isRequired
} : void 0;

TabIndicator.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};