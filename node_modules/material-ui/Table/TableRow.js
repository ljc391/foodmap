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

exports.default = TableRow;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiTableRow', function (theme) {
  return {
    root: {
      height: 48,
      '&:focus': {
        outline: 'none',
        background: theme.palette.background.contentFrame
      }
    },
    head: {
      height: 64
    },
    footer: {
      height: 56
    },
    hover: {
      '&:hover': {
        background: theme.palette.background.contentFrame
      }
    },
    selected: {
      background: theme.palette.background.appBar
    }
  };
});

/**
 * A material table row.
 *
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc)
 *
 * ```jsx
 * <TableRow>
 *   <TableCell>....</TableCell>
 * </TableRow>
 * ```
 */
function TableRow(props, context) {
  var _classNames;

  var classNameProp = props.className,
      children = props.children,
      hover = props.hover,
      selected = props.selected,
      other = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'hover', 'selected']);
  var table = context.table,
      styleManager = context.styleManager;

  var classes = styleManager.render(styleSheet);

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.head, table && table.head), (0, _defineProperty3.default)(_classNames, classes.footer, table && table.footer), (0, _defineProperty3.default)(_classNames, classes.hover, table && hover), (0, _defineProperty3.default)(_classNames, classes.selected, table && selected), _classNames), classNameProp);

  return _react2.default.createElement(
    'tr',
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

process.env.NODE_ENV !== "production" ? TableRow.propTypes = {
  /**
   * Should be valid `<tr>` children such as `TableCell`.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If set to true, the table row will shade on hover.
   */
  hover: _react.PropTypes.bool,
  /**
   * If set to true, the table row will have the selected shading.
   */
  selected: _react.PropTypes.bool
} : void 0;

TableRow.defaultProps = {
  hover: false,
  selected: false
};

TableRow.contextTypes = {
  table: _react.PropTypes.object,
  styleManager: _customPropTypes2.default.muiRequired
};