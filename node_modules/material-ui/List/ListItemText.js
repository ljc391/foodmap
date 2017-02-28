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

exports.default = ListItemText;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiListItemText', function () {
  return {
    root: {
      flex: '1 1 auto',
      padding: '0 16px',
      '&:first-child': {
        paddingLeft: 0
      }
    },
    inset: {
      '&:first-child': {
        paddingLeft: 56
      }
    }
  };
}); //  weak

function ListItemText(props, context) {
  var classNameProp = props.className,
      primary = props.primary,
      secondary = props.secondary,
      inset = props.inset,
      other = (0, _objectWithoutProperties3.default)(props, ['className', 'primary', 'secondary', 'inset']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.inset, inset), classNameProp);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    primary && (typeof primary === 'string' ? (0, _jsx3.default)(_Text2.default, {
      type: 'subheading'
    }, void 0, primary) : primary),
    secondary && (typeof secondary === 'string' ? (0, _jsx3.default)(_Text2.default, {
      secondary: true,
      type: 'body1'
    }, void 0, secondary) : secondary)
  );
}

process.env.NODE_ENV !== "production" ? ListItemText.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If true, the children will be indented by 72px.
   * This is useful if there is no left avatar or left icon.
   */
  inset: _react.PropTypes.bool,
  primary: _react.PropTypes.node,
  secondary: _react.PropTypes.node
} : void 0;

ListItemText.defaultProps = {
  primary: false,
  secondary: false,
  inset: false
};

ListItemText.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};