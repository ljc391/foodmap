'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = ListSubheader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiListSubheader', function (theme) {
  var palette = theme.palette,
      typography = theme.typography;


  return {
    root: {
      boxSizing: 'border-box',
      lineHeight: '48px',
      paddingLeft: 16,
      color: palette.text.secondary,
      fontFamily: typography.fontFamily,
      fontWeight: typography.fontWeightMedium,
      fontSize: typography.fontSize
    },
    primary: {
      color: palette.primary[500]
    },
    inset: {
      paddingLeft: 72
    }
  };
});

function ListSubheader(props, context) {
  var _classNames;

  var classNameProp = props.className,
      primary = props.primary,
      inset = props.inset,
      children = props.children,
      other = (0, _objectWithoutProperties3.default)(props, ['className', 'primary', 'inset', 'children']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.primary, primary), (0, _defineProperty3.default)(_classNames, classes.inset, inset), _classNames), classNameProp);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

process.env.NODE_ENV !== "production" ? ListSubheader.propTypes = {
  /**
   * The content of the ListSubheader.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If `true`, the ListSubheader will be indented.
   */
  inset: _react.PropTypes.bool,
  /**
   * If `true`, the ListSubheader will have the theme primary color.
   */
  primary: _react.PropTypes.bool
} : void 0;

ListSubheader.defaultProps = {
  inset: false,
  primary: false
};

ListSubheader.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};