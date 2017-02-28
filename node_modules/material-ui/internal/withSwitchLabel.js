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

var _createHelper = require('recompose/createHelper');

var _createHelper2 = _interopRequireDefault(_createHelper);

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiSwitchLabel', function (theme) {
  return {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    hasLabel: {
      marginLeft: -12,
      marginRight: 16 },
    labelText: {
      userSelect: 'none'
    },
    disabled: {
      color: theme.palette.text.disabled,
      cursor: 'not-allowed'
    }
  };
}); //  weak
/* eslint-disable jsx-a11y/label-has-for */

function withSwitchLabel(SwitchComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(SwitchLabel, _Component);

    function SwitchLabel() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, SwitchLabel);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SwitchLabel.__proto__ || (0, _getPrototypeOf2.default)(SwitchLabel)).call.apply(_ref, [this].concat(args))), _this), _this.switch = undefined, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SwitchLabel, [{
      key: 'focus',
      value: function focus() {
        if (this.switch && this.switch.focus) {
          this.switch.focus();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            disabled = _props.disabled,
            label = _props.label,
            labelClassNameProp = _props.labelClassName,
            other = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'label', 'labelClassName']);


        var classes = this.context.styleManager.render(styleSheet);

        var labelClassName = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.hasLabel, label && label.length), labelClassNameProp);

        var labelTextClassName = (0, _classnames2.default)(classes.labelText, (0, _defineProperty3.default)({}, classes.disabled, disabled));

        var switchElement = _react2.default.createElement(SwitchComponent, (0, _extends3.default)({
          ref: function ref(c) {
            _this2.switch = c;
          },
          disabled: disabled
        }, other));

        if (!label) {
          return switchElement;
        }

        return (0, _jsx3.default)('label', {
          className: labelClassName
        }, void 0, switchElement, (0, _jsx3.default)('span', {
          className: labelTextClassName
        }, void 0, label));
      }
    }]);
    return SwitchLabel;
  }(_react.Component), _class.propTypes = {
    /**
     * If `true`, the control will be disabled.
     */
    disabled: _react.PropTypes.bool,
    /**
     * The text to be used in an enclosing label element.
     */
    label: _react.PropTypes.node,
    /**
     * The className to be used in an enclosing label element.
     */
    labelClassName: _react.PropTypes.string
  }, _class.contextTypes = {
    styleManager: _customPropTypes2.default.muiRequired
  }, _temp2;
}

exports.default = (0, _createHelper2.default)(withSwitchLabel, 'withSwitchLabel', true, true);