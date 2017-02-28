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

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiBottomNavigationButton', function (theme) {
  var palette = theme.palette,
      typography = theme.typography,
      transitions = theme.transitions;

  return {
    root: {
      transition: '' + transitions.create(['color', 'padding-top'], {
        duration: transitions.duration.short
      }),
      paddingTop: 8,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      minWidth: 80,
      maxWidth: 168,
      background: 'none',
      color: palette.text.secondary,
      flex: '1'
    },
    selected: {
      paddingTop: 6,
      color: palette.primary[500]
    },
    selectedIconOnly: {
      paddingTop: 16
    },
    label: {
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize - 2,
      opacity: 1,
      transition: 'font-size 0.2s, opacity 0.2s',
      transitionDelay: '0.1s'
    },
    selectedLabel: {
      fontSize: typography.fontSize
    },
    hiddenLabel: {
      opacity: 0,
      transitionDelay: '0s'
    },
    icon: {
      display: 'block',
      margin: 'auto'
    }
  };
});

var BottomNavigationButton = function (_Component) {
  (0, _inherits3.default)(BottomNavigationButton, _Component);

  function BottomNavigationButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, BottomNavigationButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BottomNavigationButton.__proto__ || (0, _getPrototypeOf2.default)(BottomNavigationButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          index = _this$props.index,
          onClick = _this$props.onClick;


      onChange(event, index);

      if (onClick) {
        onClick(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(BottomNavigationButton, [{
    key: 'render',
    value: function render() {
      var _classNames, _classNames2;

      var _props = this.props,
          label = _props.label,
          iconProp = _props.icon,
          selected = _props.selected,
          classNameProp = _props.className,
          showLabelProp = _props.showLabel,
          onChange = _props.onChange,
          index = _props.index,
          other = (0, _objectWithoutProperties3.default)(_props, ['label', 'icon', 'selected', 'className', 'showLabel', 'onChange', 'index']);

      var classes = this.context.styleManager.render(styleSheet);

      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.selected, selected), (0, _defineProperty3.default)(_classNames, classes.selectedIconOnly, !showLabelProp && !selected), _classNames), classNameProp);

      var iconClassName = (0, _classnames2.default)(classes.icon, (0, _react.isValidElement)(iconProp) ? iconProp.props.className : null);

      var icon = (0, _react.isValidElement)(iconProp) ? (0, _react.cloneElement)(iconProp, { className: iconClassName }) : (0, _jsx3.default)(_Icon2.default, {}, void 0, iconProp);

      var labelClassName = (0, _classnames2.default)(classes.label, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.selectedLabel, selected), (0, _defineProperty3.default)(_classNames2, classes.hiddenLabel, !showLabelProp && !selected), _classNames2));

      return _react2.default.createElement(
        _ButtonBase2.default,
        (0, _extends3.default)({
          className: className,
          focusRipple: true
        }, other, {
          onClick: this.handleChange
        }),
        icon,
        (0, _jsx3.default)('span', {
          className: labelClassName
        }, void 0, label)
      );
    }
  }]);
  return BottomNavigationButton;
}(_react.Component);

BottomNavigationButton.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = BottomNavigationButton;
process.env.NODE_ENV !== "production" ? BottomNavigationButton.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * The icon element. If a string is passed, it will be used as a material icon font ligature.
   */
  icon: _react.PropTypes.node,
  /**
   * @ignore
   */
  index: _react.PropTypes.number,
  /**
   * The label element.
   */
  label: _react.PropTypes.node,
  /**
   * @ignore
   */
  onChange: _react.PropTypes.func,
  /**
   * @ignore
   */
  onClick: _react.PropTypes.func,
  /**
   * @ignore
   */
  selected: _react.PropTypes.bool,
  /**
   * If `true`, the BottomNavigationButton will show his label.
   */
  showLabel: _react.PropTypes.bool
} : void 0;