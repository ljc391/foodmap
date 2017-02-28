'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = DialogTitle;

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

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiDialogTitle', function () {
  var gutter = 24;
  return {
    root: {
      margin: 0,
      padding: gutter + 'px ' + gutter + 'px 20px ' + gutter + 'px',
      flex: '0 0 auto'
    }
  };
}); //  weak

function DialogTitle(props, context) {
  var children = props.children,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'className']);


  var classes = context.styleManager.render(styleSheet);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.root, className)
    }, other),
    typeof children === 'string' ? (0, _jsx3.default)(_Text2.default, {
      type: 'title'
    }, void 0, children) : children
  );
}

process.env.NODE_ENV !== "production" ? DialogTitle.propTypes = {
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string
} : void 0;

DialogTitle.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};