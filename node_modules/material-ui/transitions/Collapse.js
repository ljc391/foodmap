'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _Transition = require('../internal/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reflow = function reflow(elem) {
  return elem.offsetHeight;
}; //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiCollapse', function (theme) {
  return {
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },
    entered: {
      height: 'auto',
      transitionDuration: '0ms'
    }
  };
});

var Collapse = function (_Component) {
  (0, _inherits3.default)(Collapse, _Component);

  function Collapse() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Collapse.__proto__ || (0, _getPrototypeOf2.default)(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.wrapper = null, _this.handleEnter = function (element) {
      element.style.height = '0px';
      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }
    }, _this.handleEntering = function (element) {
      var transitionDuration = _this.props.transitionDuration;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      if (transitionDuration === 'auto') {
        var getAutoHeightDuration = _this.context.styleManager.theme.transitions.getAutoHeightDuration;

        element.style.transitionDuration = getAutoHeightDuration(wrapperHeight) + 'ms';
      } else if (typeof transitionDuration === 'number') {
        element.style.transitionDuration = transitionDuration + 'ms';
      } else {
        element.style.transitionDuration = transitionDuration;
      }

      element.style.height = wrapperHeight + 'px';

      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }
    }, _this.handleEntered = function (element) {
      element.style.transitionDuration = '0ms'; // safari fix
      element.style.height = 'auto';
      reflow(element);
      if (_this.props.onEntered) {
        _this.props.onEntered(element);
      }
    }, _this.handleExit = function (element) {
      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;
      element.style.height = wrapperHeight + 'px';
      if (_this.props.onExit) {
        _this.props.onExit(element);
      }
    }, _this.handleExiting = function (element) {
      var transitionDuration = _this.props.transitionDuration;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      if (transitionDuration) {
        if (transitionDuration === 'auto') {
          var getAutoHeightDuration = _this.context.styleManager.theme.transitions.getAutoHeightDuration;

          element.style.transitionDuration = getAutoHeightDuration(wrapperHeight) + 'ms';
        } else if (typeof transitionDuration === 'number') {
          element.style.transitionDuration = transitionDuration + 'ms';
        } else {
          element.style.transitionDuration = transitionDuration;
        }
      }

      element.style.height = '0px';
      if (_this.props.onExiting) {
        _this.props.onExiting(element);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Collapse, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          containerClassName = _props.containerClassName,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          transitionDuration = _props.transitionDuration,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'containerClassName', 'onEnter', 'onEntering', 'onExit', 'onExiting', 'transitionDuration']);


      var classes = this.context.styleManager.render(styleSheet);
      var containerClasses = (0, _classnames2.default)(classes.container, containerClassName);

      return _react2.default.createElement(
        _Transition2.default,
        (0, _extends3.default)({
          onEntering: this.handleEntering,
          onEnter: this.handleEnter,
          onEntered: this.handleEntered,
          enteredClassName: classes.entered,
          onExiting: this.handleExiting,
          onExit: this.handleExit
        }, other),
        (0, _jsx3.default)('div', {
          className: containerClasses
        }, void 0, _react2.default.createElement(
          'div',
          { ref: function ref(c) {
              _this2.wrapper = c;
            } },
          children
        ))
      );
    }
  }]);
  return Collapse;
}(_react.Component);

Collapse.defaultProps = {
  in: false,
  transitionDuration: 300
};
Collapse.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = Collapse;
process.env.NODE_ENV !== "production" ? Collapse.propTypes = {
  /**
   * The content node to be collapsed.
   */
  children: _react.PropTypes.node,
  /**
   * Class name passed to the wrapping container
   * required for holding+measuring the expanding content.
   */
  containerClassName: _react.PropTypes.string,
  /**
   * Set to true to transition in.
   */
  in: _react.PropTypes.bool,
  /**
   * Callback fired before the component is entering.
   */
  onEnter: _react.PropTypes.func,
  /**
   * Callback fired when the component is entering.
   */
  onEntering: _react.PropTypes.func,
  /**
   * Callback fired when the component has entered.
   */
  onEntered: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired before the component is exiting.
   */
  onExit: _react.PropTypes.func,
  /**
   * Callback fired when the component is exiting.
   */
  onExiting: _react.PropTypes.func,
  /**
   * Callback fired when the component has exited.
   */
  onExited: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
} : void 0;