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

exports.default = Divider;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiDivider', function (theme) {
  var palette = theme.palette;


  return {
    root: {
      height: 1,
      margin: 0, // Reset browser default style.
      border: 'none'
    },
    default: {
      backgroundColor: palette.text.divider
    },
    inset: {
      marginLeft: 72
    },
    light: {
      backgroundColor: palette.text.lightDivider
    },
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    }
  };
});

function Divider(props, context) {
  var _classNames;

  var absolute = props.absolute,
      classNameProp = props.className,
      inset = props.inset,
      light = props.light,
      other = (0, _objectWithoutProperties3.default)(props, ['absolute', 'className', 'inset', 'light']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.absolute, absolute), (0, _defineProperty3.default)(_classNames, classes.inset, inset), (0, _defineProperty3.default)(_classNames, light ? classes.light : classes.default, true), _classNames), classNameProp);

  return _react2.default.createElement('hr', (0, _extends3.default)({ className: className }, other));
}

process.env.NODE_ENV !== "production" ? Divider.propTypes = {
  absolute: _react.PropTypes.bool,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If true, the `Divider` will be indented.
   */
  inset: _react.PropTypes.bool,
  light: _react.PropTypes.bool
} : void 0;

Divider.defaultProps = {
  absolute: false,
  inset: false,
  light: false
};

Divider.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};