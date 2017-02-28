'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shallowEqual = require('recompose/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _Input = require('../Input');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _FormControl = require('../Form/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * TextField
 *
 * @see https://material.google.com/components/text-fields.html
 *
 * ```js
 * import TextField from 'material-ui/TextField';
 *
 * const Component = () => <TextField value="Hello World">;
 * ```
 */
var TextField = function (_Component) {
  (0, _inherits3.default)(TextField, _Component);

  function TextField() {
    (0, _classCallCheck3.default)(this, TextField);
    return (0, _possibleConstructorReturn3.default)(this, (TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).apply(this, arguments));
  }

  (0, _createClass3.default)(TextField, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.context.styleManager.theme, nextContext.styleManager.theme);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          disabled = _props.disabled,
          error = _props.error,
          inputClassName = _props.inputClassName,
          inputProps = _props.inputProps,
          label = _props.label,
          labelClassName = _props.labelClassName,
          required = _props.required,
          type = _props.type,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['className', 'disabled', 'error', 'inputClassName', 'inputProps', 'label', 'labelClassName', 'required', 'type', 'value']);


      return _react2.default.createElement(
        _FormControl2.default,
        (0, _extends3.default)({
          className: className,
          error: error,
          required: required
        }, other),
        label && (0, _jsx3.default)(_Input.InputLabel, {
          className: labelClassName
        }, void 0, label),
        _react2.default.createElement(_Input.Input, (0, _extends3.default)({
          className: inputClassName,
          value: value,
          type: type,
          disabled: disabled
        }, inputProps))
      );
    }
  }]);
  return TextField;
}(_react.Component); //  weak

TextField.defaultProps = {
  required: false
};
TextField.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = TextField;
process.env.NODE_ENV !== "production" ? TextField.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If `true`, the input will be disabled.
   */
  disabled: _react.PropTypes.bool,
  /**
   * Whether the label should be displayed in an error state.
   */
  error: _react.PropTypes.bool,
  /*
   * @ignore
   */
  id: _react.PropTypes.string,
  /**
   * The CSS class name of the input element.
   */
  inputClassName: _react.PropTypes.string,
  /**
   * Properties applied to the internal `<Input />` component.
   */
  inputProps: _react.PropTypes.object,
  /**
   * The label text.
   */
  label: _react.PropTypes.node,
  /**
   * The CSS class name of the label element.
   */
  labelClassName: _react.PropTypes.string,
  /**
   * Whether the label should be displayed as required (asterisk).
   */
  required: _react.PropTypes.bool,
  /**
   * Type of the input element. It should be a valid HTML5 input type.
   */
  type: _react.PropTypes.string,
  /**
   * The input value, required for a controlled component.
   */
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
} : void 0;