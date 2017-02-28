'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Badge;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var radius = 12;
var radius2x = 2 * radius;

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiBadge', function (theme) {
  var typography = theme.typography,
      palette = theme.palette;


  return {
    root: {
      position: 'relative',
      display: 'inline-block'
    },
    badge: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: -radius,
      right: -radius,
      fontWeight: typography.fontWeight,
      fontSize: radius,
      width: radius2x,
      height: radius2x,
      borderRadius: '50%',
      backgroundColor: palette.color,
      color: palette.textColor
    },
    primary: {
      backgroundColor: palette.primary[500],
      color: palette.getContrastText(palette.primary[500])
    },
    accent: {
      backgroundColor: palette.accent.A200,
      color: palette.getContrastText(palette.accent.A200)
    }
  };
});

/**
 *
 * ```jsx
 * <Badge badgeContent={4}>
 *   <Icon>folder</Icon>
 * </Badge>
 * ```
 */
function Badge(props, context) {
  var _classNames2;

  var badgeClassNameProp = props.badgeClassName,
      badgeContent = props.badgeContent,
      classNameProp = props.className,
      children = props.children,
      primary = props.primary,
      accent = props.accent,
      other = (0, _objectWithoutProperties3.default)(props, ['badgeClassName', 'badgeContent', 'className', 'children', 'primary', 'accent']);


  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.root, true), classNameProp);
  var badgeClassName = (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.badge, true), (0, _defineProperty3.default)(_classNames2, classes.primary, primary), (0, _defineProperty3.default)(_classNames2, classes.accent, accent), _classNames2), badgeClassNameProp);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    children,
    (0, _jsx3.default)('span', {
      className: badgeClassName
    }, void 0, badgeContent)
  );
}

process.env.NODE_ENV !== "production" ? Badge.propTypes = {
  /**
   * If true, the badge will use the accent badge colors.
   */
  accent: _react.PropTypes.bool,
  /**
   * The css class name of the badge element.
   */
  badgeClassName: _react.PropTypes.string,
  /**
   * This is the content rendered within the badge.
   */
  badgeContent: _react.PropTypes.node.isRequired,
  /**
   * The badge will be added relativelty to this node.
   */
  children: _react.PropTypes.node.isRequired,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If true, the badge will use the primary badge colors.
   */
  primary: _react.PropTypes.bool
} : void 0;

Badge.defaultProps = {
  primary: false,
  accent: false
};

Badge.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};