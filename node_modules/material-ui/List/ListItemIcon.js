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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiListItemIcon', function () {
  return {
    root: {
      width: 40
    }
  };
});

var ListItemIcon = function (_Component) {
  (0, _inherits3.default)(ListItemIcon, _Component);

  function ListItemIcon() {
    (0, _classCallCheck3.default)(this, ListItemIcon);
    return (0, _possibleConstructorReturn3.default)(this, (ListItemIcon.__proto__ || (0, _getPrototypeOf2.default)(ListItemIcon)).apply(this, arguments));
  }

  (0, _createClass3.default)(ListItemIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          classNameProp = _props.className,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

      var classes = this.context.styleManager.render(styleSheet);

      return (0, _react.cloneElement)(children, (0, _extends3.default)({
        className: (0, _classnames2.default)(classes.root, classNameProp, children.props.className)
      }, other));
    }
  }]);
  return ListItemIcon;
}(_react.Component);

exports.default = ListItemIcon;


process.env.NODE_ENV !== "production" ? ListItemIcon.propTypes = {
  children: _react.PropTypes.element.isRequired,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string
} : void 0;

ListItemIcon.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};