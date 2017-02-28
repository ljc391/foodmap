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

var _reactDom = require('react-dom');

var _jssThemeReactor = require('jss-theme-reactor');

var _scrollbarSize = require('dom-helpers/util/scrollbarSize');

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _Popover = require('../internal/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _MenuList = require('./MenuList');

var _MenuList2 = _interopRequireDefault(_MenuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiMenu', function () {
  return {
    popover: {
      maxHeight: 250
    }
  };
}); //  weak

var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.menuList = undefined, _this.handleEnter = function (element) {
      var list = (0, _reactDom.findDOMNode)(_this.menuList);

      if (_this.menuList && _this.menuList.selectedItem) {
        (0, _reactDom.findDOMNode)(_this.menuList.selectedItem).focus(); // eslint-disable-line react/no-find-dom-node
      } else if (list) {
        list.firstChild.focus();
      }

      if (list && element.clientHeight < list.clientHeight) {
        var size = (0, _scrollbarSize2.default)() + 'px';
        list.style.paddingRight = size;
        list.style.width = 'calc(100% + ' + size + ')';
      }

      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }
    }, _this.handleListKeyDown = function (event, key) {
      if (key === 'tab') {
        event.preventDefault();
        return _this.props.onRequestClose();
      }

      return false;
    }, _this.getContentAnchorEl = function () {
      if (!_this.menuList || !_this.menuList.selectedItem) {
        return (0, _reactDom.findDOMNode)(_this.menuList).firstChild;
      }

      return (0, _reactDom.findDOMNode)(_this.menuList.selectedItem);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Menu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          anchorEl = _props.anchorEl,
          children = _props.children,
          className = _props.className,
          open = _props.open,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onEntered = _props.onEntered,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          onExited = _props.onExited,
          onRequestClose = _props.onRequestClose,
          transitionDuration = _props.transitionDuration,
          other = (0, _objectWithoutProperties3.default)(_props, ['anchorEl', 'children', 'className', 'open', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited', 'onRequestClose', 'transitionDuration']);


      var classes = this.context.styleManager.render(styleSheet);

      return (0, _jsx3.default)(_Popover2.default, {
        anchorEl: anchorEl,
        getContentAnchorEl: this.getContentAnchorEl,
        className: classes.popover,
        open: open,
        enteredClassName: classes.entered,
        onEnter: this.handleEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExiting: onExiting,
        onExit: onExit,
        onExited: onExited,
        onRequestClose: onRequestClose,
        transitionDuration: transitionDuration
      }, void 0, _react2.default.createElement(
        _MenuList2.default,
        (0, _extends3.default)({
          role: 'menu',
          ref: function ref(c) {
            _this2.menuList = c;
          },
          className: className,
          onKeyDown: this.handleListKeyDown
        }, other),
        children
      ));
    }
  }]);
  return Menu;
}(_react.Component);

Menu.defaultProps = {
  open: false,
  transitionDuration: 'auto'
};
Menu.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = Menu;
process.env.NODE_ENV !== "production" ? Menu.propTypes = {
  /**
   * This is the DOM element that will be
   * used to set the position of the menu.
   */
  anchorEl: _react.PropTypes.object,
  /**
   * Menu contents, should be menu items.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Callback fired before the Menu is entering.
   */
  onEnter: _react.PropTypes.func,
  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: _react.PropTypes.func,
  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired before the Menu is exiting.
   */
  onExit: _react.PropTypes.func,
  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: _react.PropTypes.func,
  /**
   * Callback fired when the Menu has exited.
   */
  onExited: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback function fired when the menu is requested to be closed.
   *
   * @param {event} event The event that triggered the close request
   */
  onRequestClose: _react.PropTypes.func,
  /**
   * If `true`, the menu is visible.
   */
  open: _react.PropTypes.bool,
  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
} : void 0;