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

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiFormControl', function () {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    },
    row: {
      flexDirection: 'row'
    }
  };
});

/**
 * FormControl - provides context such as dirty/focused/error/required for form inputs
 */

var FormControl = function (_Component) {
  (0, _inherits3.default)(FormControl, _Component);

  function FormControl() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FormControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FormControl.__proto__ || (0, _getPrototypeOf2.default)(FormControl)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dirty: false,
      focused: false
    }, _this.handleFocus = function () {
      if (!_this.state.focused) {
        _this.setState({ focused: true });
      }
    }, _this.handleBlur = function () {
      if (_this.state.focused) {
        _this.setState({ focused: false });
      }
    }, _this.handleDirty = function () {
      if (!_this.state.dirty) {
        _this.setState({ dirty: true });
      }
    }, _this.handleClean = function () {
      if (_this.state.dirty) {
        _this.setState({ dirty: false });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FormControl, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          error = _props.error,
          required = _props.required;
      var _state = this.state,
          dirty = _state.dirty,
          focused = _state.focused;


      return {
        muiFormControl: {
          dirty: dirty,
          error: error,
          focused: focused,
          required: required,
          onDirty: this.handleDirty,
          onClean: this.handleClean
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          error = _props2.error,
          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'className', 'error']);


      var classes = this.context.styleManager.render(styleSheet);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          className: (0, _classnames2.default)(classes.root, className)
        }, other),
        children
      );
    }
  }]);
  return FormControl;
}(_react.Component);

FormControl.defaultProps = {
  error: false,
  required: false
};
FormControl.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
FormControl.childContextTypes = {
  muiFormControl: _react.PropTypes.object.isRequired
};
exports.default = FormControl;
process.env.NODE_ENV !== "production" ? FormControl.propTypes = {
  /**
   * The contents of the `FormControl`.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Whether the label should be displayed in an error state.
   */
  error: _react.PropTypes.bool,
  required: _react.PropTypes.bool
} : void 0;