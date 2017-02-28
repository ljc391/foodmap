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

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiAppBar', function (theme) {
  return {
    appBar: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: theme.zIndex.appBar
    },
    primary: {
      backgroundColor: theme.palette.primary[500],
      color: theme.palette.getContrastText(theme.palette.primary[500])
    },
    accent: {
      backgroundColor: theme.palette.accent.A200,
      color: theme.palette.getContrastText(theme.palette.accent.A200)
    }
  };
}); //  weak

var AppBar = function (_Component) {
  (0, _inherits3.default)(AppBar, _Component);

  function AppBar() {
    (0, _classCallCheck3.default)(this, AppBar);
    return (0, _possibleConstructorReturn3.default)(this, (AppBar.__proto__ || (0, _getPrototypeOf2.default)(AppBar)).apply(this, arguments));
  }

  (0, _createClass3.default)(AppBar, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          accent = _props.accent,
          children = _props.children,
          classNameProp = _props.className,
          primary = _props.primary,
          other = (0, _objectWithoutProperties3.default)(_props, ['accent', 'children', 'className', 'primary']);


      var classes = this.context.styleManager.render(styleSheet);

      var className = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.appBar, true), (0, _defineProperty3.default)(_classNames, classes.primary, primary && !accent), (0, _defineProperty3.default)(_classNames, classes.accent, accent), _classNames), classNameProp);

      return _react2.default.createElement(
        _Paper2.default,
        (0, _extends3.default)({
          rounded: false,
          elevation: 4,
          className: className
        }, other),
        children
      );
    }
  }]);
  return AppBar;
}(_react.Component);

AppBar.defaultProps = {
  accent: false,
  primary: true
};
AppBar.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = AppBar;
process.env.NODE_ENV !== "production" ? AppBar.propTypes = {
  accent: _react.PropTypes.bool,
  /**
   * The content of the component.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  primary: _react.PropTypes.bool
} : void 0;