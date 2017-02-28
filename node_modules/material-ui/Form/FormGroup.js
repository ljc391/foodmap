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

exports.default = FormGroup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiFormGroup', function () {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap'
    },
    row: {
      flexDirection: 'row'
    }
  };
});

/**
 * FormGroup wraps controls such as Checkbox and Switch.
 * It provides compact row layout and FormLabel awareness.
 * Upon focusing on one of the child controls, it will propagate `focused` to the label.
 */
function FormGroup(props, context) {
  var className = props.className,
      children = props.children,
      row = props.row,
      other = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'row']);

  var classes = context.styleManager.render(styleSheet);
  var rootClassName = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.row, row), className);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: rootClassName }, other),
    children
  );
}

process.env.NODE_ENV !== "production" ? FormGroup.propTypes = {
  /**
   * The content of the component.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Display group of elements in a compact row.
   */
  row: _react.PropTypes.bool
} : void 0;

FormGroup.defaultProps = {
  row: false
};

FormGroup.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};