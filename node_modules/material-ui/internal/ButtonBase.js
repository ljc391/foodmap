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

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _keyboardFocus = require('../utils/keyboardFocus');

var _Ripple = require('../Ripple');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable flowtype/require-valid-file-annotation */

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiButtonBase', function () {
  return {
    buttonBase: {
      position: 'relative',
      WebkitTapHighlightColor: 'rgba(0,0,0,0.0)',
      outline: 'none',
      border: 0,
      cursor: 'pointer',
      userSelect: 'none',
      appearance: 'none',
      textDecoration: 'none'
    },
    disabled: {
      cursor: 'not-allowed'
    }
  };
});

var ButtonBase = function (_Component) {
  (0, _inherits3.default)(ButtonBase, _Component);

  function ButtonBase() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ButtonBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ButtonBase.__proto__ || (0, _getPrototypeOf2.default)(ButtonBase)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      keyboardFocused: false
    }, _this.ripple = undefined, _this.keyDown = false, _this.button = null, _this.keyboardFocusTimeout = undefined, _this.focus = function () {
      return _this.button.focus();
    }, _this.handleKeyDown = function (event) {
      var _this$props = _this.props,
          component = _this$props.component,
          focusRipple = _this$props.focusRipple,
          onKeyDown = _this$props.onKeyDown,
          onClick = _this$props.onClick;

      var key = (0, _keycode2.default)(event);

      // Check if key is already down to avoid repeats being counted as multiple activations
      if (focusRipple && !_this.keyDown && _this.state.keyboardFocused && key === 'space') {
        _this.keyDown = true;
        event.persist();
        _this.ripple.stop(event, function () {
          _this.ripple.start(event);
        });
      }

      if (onKeyDown) {
        onKeyDown(event);
      }

      // Keyboard accessibility for non interactive elements
      if (event.target === _this.button && onClick && component !== 'a' && component !== 'button' && (key === 'space' || key === 'enter')) {
        event.preventDefault();
        onClick(event);
      }
    }, _this.handleKeyUp = function (event) {
      if (_this.props.focusRipple && (0, _keycode2.default)(event) === 'space' && _this.state.keyboardFocused) {
        _this.keyDown = false;
        event.persist();
        _this.ripple.stop(event, function () {
          return _this.ripple.pulsate(event);
        });
      }
      if (_this.props.onKeyUp) {
        _this.props.onKeyUp(event);
      }
    }, _this.handleMouseDown = (0, _Ripple.createRippleHandler)(_this, 'MouseDown', 'start', function () {
      clearTimeout(_this.keyboardFocusTimeout);
      (0, _keyboardFocus.focusKeyPressed)(false);
      if (_this.state.keyboardFocused) {
        _this.setState({ keyboardFocused: false });
      }
    }), _this.handleMouseUp = (0, _Ripple.createRippleHandler)(_this, 'MouseUp', 'stop'), _this.handleMouseLeave = (0, _Ripple.createRippleHandler)(_this, 'MouseLeave', 'stop', function (event) {
      if (_this.state.keyboardFocused) {
        event.preventDefault();
      }
    }), _this.handleTouchStart = (0, _Ripple.createRippleHandler)(_this, 'TouchStart', 'start'), _this.handleTouchEnd = (0, _Ripple.createRippleHandler)(_this, 'TouchEnd', 'stop'), _this.handleBlur = (0, _Ripple.createRippleHandler)(_this, 'Blur', 'stop', function () {
      _this.setState({ keyboardFocused: false });
    }), _this.handleFocus = function (event) {
      if (_this.props.disabled) {
        return;
      }

      event.persist();

      (0, _keyboardFocus.detectKeyboardFocus)(_this, (0, _reactDom.findDOMNode)(_this.button), function () {
        _this.keyDown = false;
        _this.setState({ keyboardFocused: true });

        if (_this.props.onKeyboardFocus) {
          _this.props.onKeyboardFocus(event);
        }
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ButtonBase, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _keyboardFocus.listenForFocusKeys)();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.props.focusRipple) {
        if (nextState.keyboardFocused && !this.state.keyboardFocused) {
          this.ripple.pulsate();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.keyboardFocusTimeout);
    } // Used to help track keyboard activation keyDown

  }, {
    key: 'renderRipple',
    value: function renderRipple(ripple, center) {
      var _this2 = this;

      if (ripple === true && !this.props.disabled) {
        return _react2.default.createElement(_Ripple.TouchRipple, { ref: function ref(c) {
            _this2.ripple = c;
          }, center: center });
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this3 = this;

      var _props = this.props,
          centerRipple = _props.centerRipple,
          children = _props.children,
          classNameProp = _props.className,
          component = _props.component,
          disabled = _props.disabled,
          focusRipple = _props.focusRipple,
          keyboardFocusedClassName = _props.keyboardFocusedClassName,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onKeyDown = _props.onKeyDown,
          onKeyUp = _props.onKeyUp,
          onMouseDown = _props.onMouseDown,
          onMouseLeave = _props.onMouseLeave,
          onMouseUp = _props.onMouseUp,
          onTouchEnd = _props.onTouchEnd,
          onTouchStart = _props.onTouchStart,
          ripple = _props.ripple,
          tabIndex = _props.tabIndex,
          type = _props.type,
          other = (0, _objectWithoutProperties3.default)(_props, ['centerRipple', 'children', 'className', 'component', 'disabled', 'focusRipple', 'keyboardFocusedClassName', 'onBlur', 'onFocus', 'onKeyDown', 'onKeyUp', 'onMouseDown', 'onMouseLeave', 'onMouseUp', 'onTouchEnd', 'onTouchStart', 'ripple', 'tabIndex', 'type']);


      var classes = this.context.styleManager.render(styleSheet);

      var className = (0, _classnames2.default)(classes.buttonBase, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, keyboardFocusedClassName, keyboardFocusedClassName && this.state.keyboardFocused), _classNames), classNameProp);

      var buttonProps = (0, _extends3.default)({
        ref: function ref(c) {
          _this3.button = c;
        },
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onMouseDown: this.handleMouseDown,
        onMouseLeave: this.handleMouseLeave,
        onMouseUp: this.handleMouseUp,
        onTouchEnd: this.handleTouchEnd,
        onTouchStart: this.handleTouchStart,
        tabIndex: disabled ? '-1' : tabIndex,
        className: className
      }, other);

      var Element = component;

      if (other.href) {
        Element = 'a';
      }

      if (Element === 'button') {
        buttonProps.type = type;
        buttonProps.disabled = disabled;
      } else if (Element !== 'a') {
        buttonProps.role = this.props.hasOwnProperty('role') ? this.props.role : 'button';
      }

      return _react2.default.createElement(
        Element,
        buttonProps,
        children,
        this.renderRipple(ripple, centerRipple)
      );
    }
  }]);
  return ButtonBase;
}(_react.Component);

ButtonBase.defaultProps = {
  centerRipple: false,
  component: 'button',
  focusRipple: false,
  ripple: true,
  tabIndex: '0',
  type: 'button'
};
ButtonBase.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = ButtonBase;
process.env.NODE_ENV !== "production" ? ButtonBase.propTypes = {
  centerRipple: _react.PropTypes.bool,
  /**
   * The content of the component.
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
   * If `true`, the base button will be disabled.
   */
  disabled: _react.PropTypes.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * `ripple` must also be true.
   */
  focusRipple: _react.PropTypes.bool,
  keyboardFocusedClassName: _react.PropTypes.string,
  onBlur: _react.PropTypes.func,
  onClick: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onKeyboardFocus: _react.PropTypes.func,
  onKeyDown: _react.PropTypes.func,
  onKeyUp: _react.PropTypes.func,
  onMouseDown: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onMouseUp: _react.PropTypes.func,
  onTouchEnd: _react.PropTypes.func,
  onTouchStart: _react.PropTypes.func,
  /**
   * If `true`, the base button will have a ripple.
   */
  ripple: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
  role: _react.PropTypes.string,
  tabIndex: _react.PropTypes.string,
  type: _react.PropTypes.string
} : void 0;