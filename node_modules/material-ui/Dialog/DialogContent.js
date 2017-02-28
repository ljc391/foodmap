'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = DialogContent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiDialogContent', function () {
  var gutter = 24;
  return {
    root: {
      flex: '1 1 auto',
      overflowY: 'auto',
      padding: '0 ' + gutter + 'px ' + gutter + 'px ' + gutter + 'px',
      '&:first-child': {
        paddingTop: gutter
      }
    }
  };
});

function DialogContent(props, context) {
  var children = props.children,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'className']);


  var classes = context.styleManager.render(styleSheet);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    children
  );
}

process.env.NODE_ENV !== "production" ? DialogContent.propTypes = {
  /**
   * The content of the component.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string
} : void 0;

DialogContent.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};