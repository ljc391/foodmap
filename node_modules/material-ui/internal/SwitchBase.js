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

exports.createSwitch = createSwitch;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _checkBoxOutlineBlank = require('../svg-icons/check-box-outline-blank');

var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);

var _checkBox = require('../svg-icons/check-box');

var _checkBox2 = _interopRequireDefault(_checkBox);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiSwitchBase', function () {
  return {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'none'
    },
    input: {
      cursor: 'inherit',
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0
    }
  };
});

var _ref2 = (0, _jsx3.default)(_checkBoxOutlineBlank2.default, {
  'aria-hidden': 'true'
});

var _ref3 = (0, _jsx3.default)(_checkBox2.default, {
  'aria-hidden': 'true'
});

function createSwitch() {
  var _class, _temp2;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$defaultIcon = _ref.defaultIcon,
      defaultIcon = _ref$defaultIcon === undefined ? _ref2 : _ref$defaultIcon,
      _ref$defaultCheckedIc = _ref.defaultCheckedIcon,
      defaultCheckedIcon = _ref$defaultCheckedIc === undefined ? _ref3 : _ref$defaultCheckedIc,
      _ref$inputType = _ref.inputType,
      inputType = _ref$inputType === undefined ? 'checkbox' : _ref$inputType,
      switchStyleSheet = _ref.styleSheet;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(SwitchBase, _Component);

    function SwitchBase() {
      var _ref4;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, SwitchBase);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref4 = SwitchBase.__proto__ || (0, _getPrototypeOf2.default)(SwitchBase)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {}, _this.input = undefined, _this.button = undefined, _this.isControlled = undefined, _this.focus = function () {
        return _this.input.focus();
      }, _this.handleInputChange = function (event) {
        var newChecked = void 0;

        if (_this.isControlled) {
          newChecked = !_this.props.checked;
        } else {
          newChecked = !_this.state.checked;
          if (_this.input && _this.input.checked !== newChecked) {
            _this.input.checked = newChecked;
          }
          _this.setState({ checked: !_this.state.checked });
        }

        if (_this.props.onChange) {
          _this.props.onChange(event, newChecked);
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SwitchBase, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var props = this.props;


        this.isControlled = props.checked !== undefined;

        if (!this.isControlled) {
          // not controlled, use internal state
          this.setState({
            checked: props.defaultChecked !== undefined ? props.defaultChecked : false
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames,
            _this2 = this;

        var _props = this.props,
            checkedProp = _props.checked,
            classNameProp = _props.className,
            checkedClassName = _props.checkedClassName,
            checkedIcon = _props.checkedIcon,
            disabled = _props.disabled,
            disabledClassName = _props.disabledClassName,
            iconProp = _props.icon,
            name = _props.name,
            onChange = _props.onChange,
            ripple = _props.ripple,
            tabIndex = _props.tabIndex,
            value = _props.value,
            other = (0, _objectWithoutProperties3.default)(_props, ['checked', 'className', 'checkedClassName', 'checkedIcon', 'disabled', 'disabledClassName', 'icon', 'name', 'onChange', 'ripple', 'tabIndex', 'value']);


        var checked = this.isControlled ? checkedProp : this.state.checked;
        var classes = this.context.styleManager.render(styleSheet);
        var switchClasses = switchStyleSheet ? this.context.styleManager.render(switchStyleSheet) : {};

        var className = (0, _classnames2.default)(classes.root, switchClasses.default, classNameProp, (_classNames = {}, (0, _defineProperty3.default)(_classNames, (0, _classnames2.default)(switchClasses.checked, checkedClassName), checked), (0, _defineProperty3.default)(_classNames, (0, _classnames2.default)(switchClasses.disabled, disabledClassName), disabled), _classNames));

        var icon = checked ? checkedIcon : iconProp;

        if (typeof icon === 'string') {
          icon = (0, _jsx3.default)(_Icon2.default, {
            'aria-hidden': 'true'
          }, void 0, icon);
        }

        return _react2.default.createElement(
          _IconButton2.default,
          (0, _extends3.default)({
            component: 'span',
            buttonRef: function buttonRef(c) {
              _this2.button = c;
            },
            className: className,
            disabled: disabled,
            ripple: ripple,
            tabIndex: null,
            role: undefined
          }, other),
          icon,
          _react2.default.createElement('input', {
            ref: function ref(c) {
              _this2.input = c;
            },
            type: inputType,
            name: name,
            checked: this.isControlled ? checkedProp : undefined,
            onChange: this.handleInputChange,
            className: classes.input,
            disabled: disabled,
            tabIndex: tabIndex,
            value: value
          })
        );
      }
    }]);
    return SwitchBase;
  }(_react.Component), _class.propTypes = {
    /**
     * SwitchBase is checked if true.
     */
    checked: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string]),
    /**
     * The CSS class name of the root element when checked.
     */
    checkedClassName: _react.PropTypes.string,
    checkedIcon: _react.PropTypes.node,
    /**
     * The CSS class name of the root element.
     */
    className: _react.PropTypes.string,
    /**
     * @ignore
     */
    defaultChecked: _react.PropTypes.bool,
    /**
     * If `true`, the switch will be disabled.
     */
    disabled: _react.PropTypes.bool,
    /**
     * The CSS class name of the root element when disabled.
     */
    disabledClassName: _react.PropTypes.string,
    icon: _react.PropTypes.node,
    /*
     * @ignore
     */
    name: _react.PropTypes.string,
    /**
     * Callback function that is fired when the switch is changed.
     *
     * @param {object} event `change` event
     * @param {boolean} checked The `checked` value of the switch
     */
    onChange: _react.PropTypes.func,
    /**
     * If false, the ripple effect will be disabled.
     */
    ripple: _react.PropTypes.bool,
    /**
     * @ignore
     */
    tabIndex: _react.PropTypes.string,
    value: _react.PropTypes.string
  }, _class.defaultProps = {
    icon: defaultIcon,
    checkedIcon: defaultCheckedIcon
  }, _class.contextTypes = {
    styleManager: _customPropTypes2.default.muiRequired
  }, _temp2;
}