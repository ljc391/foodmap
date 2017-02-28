'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiTableBody', function (theme) {
  return {
    root: {
      fontSize: 13,
      color: theme.palette.text.primary
    }
  };
});

/**
 * A material table body.
 *
 * ```jsx
 * <TableBody>
 *   <TableRow>....</TableRow>
 * </TableBody>
 * ```
 */

var TableBody = function (_Component) {
  (0, _inherits3.default)(TableBody, _Component);

  function TableBody() {
    (0, _classCallCheck3.default)(this, TableBody);
    return (0, _possibleConstructorReturn3.default)(this, (TableBody.__proto__ || (0, _getPrototypeOf2.default)(TableBody)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableBody, [{
    key: 'getChildContext',
    value: function getChildContext() {
      // eslint-disable-line class-methods-use-this
      return {
        table: {
          body: true
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNameProp = _props.className,
          children = _props.children,
          other = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

      var classes = this.context.styleManager.render(styleSheet);
      var className = (0, _classnames2.default)(classes.root, classNameProp);

      return _react2.default.createElement(
        'tbody',
        (0, _extends3.default)({ className: className }, other),
        children
      );
    }
  }]);
  return TableBody;
}(_react.Component);

TableBody.contextTypes = {
  table: _react.PropTypes.object,
  styleManager: _customPropTypes2.default.muiRequired
};
TableBody.childContextTypes = { table: _react.PropTypes.object };
exports.default = TableBody;
process.env.NODE_ENV !== "production" ? TableBody.propTypes = {
  /**
   * Should be valid `<tbody>` children such as `TableRow`.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string
} : void 0;