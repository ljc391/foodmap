'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.default = Toolbar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiToolbar', function (theme) {
  return (0, _defineProperty3.default)({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: 56
    },
    gutters: theme.mixins.gutters({})
  }, theme.breakpoints.up('sm'), {
    root: {
      height: 64
    }
  });
});

function Toolbar(props, context) {
  var children = props.children,
      classNameProp = props.className,
      gutters = props.gutters,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'className', 'gutters']);


  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.gutters, gutters), classNameProp);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

process.env.NODE_ENV !== "production" ? Toolbar.propTypes = {
  /**
   * Can be a `ToolbarGroup` to render a group of related items.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If set to true, enables gutter padding.
   */
  gutters: _react.PropTypes.bool
} : void 0;

Toolbar.defaultProps = {
  gutters: true
};

Toolbar.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};