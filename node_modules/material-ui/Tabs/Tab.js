'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _ButtonBase = require('../internal/ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiTab', function (theme) {
  var _extends2;

  return {
    root: (0, _extends4.default)({}, theme.typography.button, (_extends2 = {
      maxWidth: 264,
      minWidth: 72
    }, (0, _defineProperty3.default)(_extends2, theme.breakpoints.up('md'), {
      minWidth: 160
    }), (0, _defineProperty3.default)(_extends2, 'background', 'none'), (0, _defineProperty3.default)(_extends2, 'padding', 0), (0, _defineProperty3.default)(_extends2, 'minHeight', 48), _extends2)),
    rootLabelIcon: {
      minHeight: 72
    },
    rootAccent: {
      color: theme.palette.text.secondary
    },
    rootAccentSelected: {
      color: theme.palette.accent[500]
    },
    rootAccentDisabled: {
      color: theme.palette.text.disabled
    },
    rootInherit: {
      color: 'inherit',
      opacity: 0.7
    },
    rootInheritSelected: {
      opacity: 1
    },
    rootInheritDisabled: {
      opacity: 0.4
    },
    label: (0, _defineProperty3.default)({
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: theme.typography.fontFamily,
      textTransform: 'uppercase',
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 6,
      paddingBottom: 6,
      display: 'block'
    }, theme.breakpoints.up('sm'), {
      paddingLeft: 24,
      paddingRight: 24,
      fontSize: theme.typography.fontSize - 1
    })
  };
});

var Tab = function (_Component) {
  (0, _inherits3.default)(Tab, _Component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
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

  (0, _createClass3.default)(Tab, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          classNameProp = _props.className,
          fullWidth = _props.fullWidth,
          iconProp = _props.icon,
          index = _props.index,
          labelProp = _props.label,
          onChange = _props.onChange,
          selected = _props.selected,
          styleProp = _props.style,
          textColor = _props.textColor,
          disabled = _props.disabled,
          other = (0, _objectWithoutProperties3.default)(_props, ['className', 'fullWidth', 'icon', 'index', 'label', 'onChange', 'selected', 'style', 'textColor', 'disabled']);


      var classes = this.context.styleManager.render(styleSheet);

      var icon = void 0;

      if (iconProp !== undefined) {
        icon = (0, _react.isValidElement)(iconProp) ? iconProp : (0, _jsx3.default)(_Icon2.default, {}, void 0, iconProp);
      }

      var label = void 0;

      if (labelProp !== undefined) {
        label = (0, _jsx3.default)('span', {
          className: classes.label
        }, void 0, labelProp);
      }

      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.rootAccent, textColor === 'accent'), (0, _defineProperty3.default)(_classNames, classes.rootAccentDisabled, disabled && textColor === 'accent'), (0, _defineProperty3.default)(_classNames, classes.rootAccentSelected, selected && textColor === 'accent'), (0, _defineProperty3.default)(_classNames, classes.rootInherit, textColor === 'inherit'), (0, _defineProperty3.default)(_classNames, classes.rootInheritDisabled, disabled && textColor === 'inherit'), (0, _defineProperty3.default)(_classNames, classes.rootInheritSelected, selected && textColor === 'inherit'), (0, _defineProperty3.default)(_classNames, classes.rootLabelIcon, icon && label), _classNames), classNameProp);

      var style = {};

      if (fullWidth) {
        style.width = '100%';
      }

      if (textColor !== 'accent' && textColor !== 'inherit') {
        style.color = textColor;
      }

      style = (0, _keys2.default)(style).length > 0 ? (0, _extends4.default)({}, style, styleProp) : styleProp;

      return _react2.default.createElement(
        _ButtonBase2.default,
        (0, _extends4.default)({
          focusRipple: true,
          className: className,
          style: style,
          role: 'tab',
          'aria-selected': selected,
          disabled: disabled
        }, other, {
          onClick: this.handleChange
        }),
        icon,
        label
      );
    }
  }]);
  return Tab;
}(_react.Component);

Tab.defaultProps = {
  disabled: false
};
Tab.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = Tab;
process.env.NODE_ENV !== "production" ? Tab.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If `true`, the tab will be disabled.
   */
  disabled: _react.PropTypes.bool,
  /**
   * @ignore
   */
  fullWidth: _react.PropTypes.bool,
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
   * @ignore
   */
  style: _react.PropTypes.object,
  /**
   * @ignore
   */
  textColor: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['accent', 'inherit']), _react.PropTypes.string])
} : void 0;