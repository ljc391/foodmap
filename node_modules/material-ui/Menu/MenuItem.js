'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _ListItem = require('../List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiMenuItem', function (theme) {
  var palette = theme.palette,
      typography = theme.typography,
      transitions = theme.transitions;

  return {
    root: (0, _extends3.default)({}, typography.subheading, {
      height: 48,
      boxSizing: 'border-box',
      background: 'none',
      transition: transitions.create('background-color', {
        duration: transitions.duration.short
      }),
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      '&:focus': {
        background: palette.text.divider
      },
      '&:hover': {
        backgroundColor: palette.text.divider
      }
    }),
    selected: {
      backgroundColor: palette.text.divider
    }
  };
}); //  weak

var MenuItem = function (_Component) {
  (0, _inherits3.default)(MenuItem, _Component);

  function MenuItem() {
    (0, _classCallCheck3.default)(this, MenuItem);
    return (0, _possibleConstructorReturn3.default)(this, (MenuItem.__proto__ || (0, _getPrototypeOf2.default)(MenuItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(MenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNameProp = _props.className,
          component = _props.component,
          selected = _props.selected,
          role = _props.role,
          other = (0, _objectWithoutProperties3.default)(_props, ['className', 'component', 'selected', 'role']);


      var classes = this.context.styleManager.render(styleSheet);
      var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.selected, selected), classNameProp);

      var listItemProps = {};

      if (!component) {
        listItemProps.ripple = false;
      }

      return _react2.default.createElement(_ListItem2.default, (0, _extends3.default)({
        button: true,
        role: role,
        tabIndex: '-1',
        className: className,
        component: component
      }, listItemProps, other));
    }
  }]);
  return MenuItem;
}(_react.Component);

MenuItem.defaultProps = {
  role: 'menuitem',
  selected: false
};
MenuItem.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = MenuItem;
process.env.NODE_ENV !== "production" ? MenuItem.propTypes = {
  /**
   * Menu item contents.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a ReactElement.
   */
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  /**
   * @ignore
   */
  role: _react.PropTypes.string,
  /**
   * Use to apply selected styling.
   */
  selected: _react.PropTypes.bool
} : void 0;