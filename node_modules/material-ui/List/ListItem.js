'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

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

var _ButtonBase = require('../internal/ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiListItem', function (theme) {
  var palette = theme.palette,
      transitions = theme.transitions;

  return {
    listItem: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none'
    },
    listItemContainer: {
      position: 'relative'
    },
    keyboardFocused: {
      background: palette.text.divider
    },
    default: {
      paddingTop: 19,
      paddingBottom: 19
    },
    dense: {
      paddingTop: 8,
      paddingBottom: 8
    },
    disabled: {
      opacity: 0.5
    },
    divider: {
      borderBottom: '1px solid ' + palette.text.lightDivider
    },
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },
    button: {
      transition: transitions.create('background-color', {
        duration: transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: palette.text.divider,
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      }
    }
  };
}); //  weak

var ListItem = function (_Component) {
  (0, _inherits3.default)(ListItem, _Component);

  function ListItem() {
    (0, _classCallCheck3.default)(this, ListItem);
    return (0, _possibleConstructorReturn3.default)(this, (ListItem.__proto__ || (0, _getPrototypeOf2.default)(ListItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(ListItem, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          button = _props.button,
          childrenProp = _props.children,
          classNameProp = _props.className,
          componentProp = _props.component,
          dense = _props.dense,
          disabled = _props.disabled,
          divider = _props.divider,
          gutters = _props.gutters,
          other = (0, _objectWithoutProperties3.default)(_props, ['button', 'children', 'className', 'component', 'dense', 'disabled', 'divider', 'gutters']);


      var classes = this.context.styleManager.render(styleSheet);
      var className = (0, _classnames2.default)(classes.listItem, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.gutters, gutters), (0, _defineProperty3.default)(_classNames, classes.divider, divider), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.button, button), (0, _defineProperty3.default)(_classNames, dense ? classes.dense : classes.default, true), _classNames), classNameProp);

      var listItemProps = (0, _extends3.default)({ className: className, disabled: disabled }, other);
      var ComponentMain = componentProp;

      if (button) {
        ComponentMain = _ButtonBase2.default;
        listItemProps.component = componentProp || 'div';
        listItemProps.keyboardFocusedClassName = classes.keyboardFocused;
      }

      var children = _react2.default.Children.toArray(childrenProp);

      if (children.length && children[children.length - 1].type && children[children.length - 1].type.muiName === 'ListItemSecondaryAction') {
        var secondaryAction = children.pop();
        return (0, _jsx3.default)('div', {
          className: classes.listItemContainer
        }, void 0, _react2.default.createElement(
          ComponentMain,
          listItemProps,
          children
        ), secondaryAction);
      }

      return _react2.default.createElement(
        ComponentMain,
        listItemProps,
        children
      );
    }
  }]);
  return ListItem;
}(_react.Component);

ListItem.defaultProps = {
  button: false,
  component: 'div',
  dense: false,
  disabled: false,
  divider: false,
  gutters: true
};
ListItem.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = ListItem;
process.env.NODE_ENV !== "production" ? ListItem.propTypes = {
  button: _react.PropTypes.bool,
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
  dense: _react.PropTypes.bool,
  /**
   * @ignore
   */
  disabled: _react.PropTypes.bool,
  divider: _react.PropTypes.bool,
  gutters: _react.PropTypes.bool
} : void 0;