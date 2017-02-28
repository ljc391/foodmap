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

var _contains = require('dom-helpers/query/contains');

var _contains2 = _interopRequireDefault(_contains);

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Transition = require('./Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}

function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? n + 'px' : n;
  }).join(' ');
}

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiPopover', function () {
  return {
    popover: {
      position: 'absolute',
      overflowY: 'auto',
      overflowX: 'hidden',
      '&:focus': {
        outline: 'none'
      }
    }
  };
});

var Popover = function (_Component) {
  (0, _inherits3.default)(Popover, _Component);

  function Popover() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Popover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Popover.__proto__ || (0, _getPrototypeOf2.default)(Popover)).call.apply(_ref, [this].concat(args))), _this), _this.autoTransitionDuration = undefined, _this.handleEnter = function (element) {
      element.style.opacity = 0;
      element.style.transform = Popover.getScale(0.75);

      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }

      var positioning = _this.getPositioningStyle(element);

      element.style.top = positioning.top;
      element.style.left = positioning.left;
      element.style.transformOrigin = positioning.transformOrigin;

      var transitionDuration = _this.props.transitionDuration;
      var transitions = _this.context.styleManager.theme.transitions;


      if (transitionDuration === 'auto') {
        transitionDuration = transitions.getAutoHeightDuration(element.clientHeight);
        _this.autoTransitionDuration = transitionDuration;
      }

      element.style.transition = [transitions.create('opacity', {
        duration: transitionDuration
      }), transitions.create('transform', {
        duration: transitionDuration * 0.666
      })].join(',');
    }, _this.handleEntering = function (element) {
      element.style.opacity = 1;
      element.style.transform = Popover.getScale(1);

      if (_this.props.onEntering) {
        _this.props.onEntering();
      }
    }, _this.handleExit = function (element) {
      var transitionDuration = _this.props.transitionDuration;
      var transitions = _this.context.styleManager.theme.transitions;


      if (transitionDuration === 'auto') {
        transitionDuration = transitions.getAutoHeightDuration(element.clientHeight);
        _this.autoTransitionDuration = transitionDuration;
      }

      element.style.transition = [transitions.create('opacity', {
        duration: transitionDuration
      }), transitions.create('transform', {
        duration: transitionDuration * 0.666,
        delay: transitionDuration * 0.333
      })].join(',');

      element.style.opacity = 0;
      element.style.transform = Popover.getScale(0.75);

      if (_this.props.onExit) {
        _this.props.onExit();
      }
    }, _this.handleRequestTimeout = function () {
      if (_this.props.transitionDuration === 'auto') {
        return (_this.autoTransitionDuration || 0) + 20;
      }
      return _this.props.transitionDuration + 20;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Popover, [{
    key: 'getPositioningStyle',
    value: function getPositioningStyle(element) {
      // Check if the parent has requested anchoring on an inner content node
      var contentAnchorOffset = this.getContentAnchorOffset(element);
      // Get the offset of of the anchoring element
      var anchorOffset = this.getAnchorOffset(contentAnchorOffset);

      var elemRect = {
        width: element.clientWidth,
        height: element.clientHeight
      };
      // Get the transform origin point on the element itself
      var transformOrigin = this.getTransformOrigin(elemRect, contentAnchorOffset);

      // Calculate element positioning
      var top = anchorOffset.top - transformOrigin.vertical;
      var left = anchorOffset.left - transformOrigin.horizontal;
      var bottom = top + elemRect.height;
      var right = left + elemRect.width;

      // Window thresholds taking required margin into account
      var marginThreshold = 16;
      var heightThreshold = window.innerHeight - marginThreshold;
      var widthThreshold = window.innerWidth - marginThreshold;

      // Check if the vertical axis needs shifting
      if (top < marginThreshold) {
        var diff = top - marginThreshold;
        top -= diff;
        transformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        var _diff = bottom - heightThreshold;
        top -= _diff;
        transformOrigin.vertical += _diff;
      }

      // Check if the horizontal axis needs shifting
      if (left < marginThreshold) {
        var _diff2 = left - marginThreshold;
        left -= _diff2;
        transformOrigin.horizontal += _diff2;
      } else if (right > widthThreshold) {
        var _diff3 = right - widthThreshold;
        left -= _diff3;
        transformOrigin.horizontal += _diff3;
      }

      return {
        top: top + 'px',
        left: left + 'px',
        transformOrigin: getTransformOriginValue(transformOrigin)
      };
    }

    /**
     * Returns the top/left offset of the position
     * to attach to on the anchor element (or body if none is provided)
     */

  }, {
    key: 'getAnchorOffset',
    value: function getAnchorOffset(contentAnchorOffset) {
      var _props = this.props,
          anchorElProp = _props.anchorEl,
          anchorOrigin = _props.anchorOrigin;


      var anchorEl = anchorElProp || document.body;
      var anchorRect = anchorEl.getBoundingClientRect();
      var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';

      return {
        top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
        left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
      };
    }

    /**
     * Returns the vertical offset of inner
     * content to anchor the transform on if provided
     */

  }, {
    key: 'getContentAnchorOffset',
    value: function getContentAnchorOffset(element) {
      var contentAnchorOffset = 0;

      if (this.props.getContentAnchorEl) {
        var contentAnchorEl = this.props.getContentAnchorEl(element);
        if (contentAnchorEl && (0, _contains2.default)(element, contentAnchorEl)) {
          contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 || 0;
        }
      }

      return contentAnchorOffset;
    }

    /**
     * Return the base transform origin using the element
     * and taking the content anchor offset into account if in use
     */

  }, {
    key: 'getTransformOrigin',
    value: function getTransformOrigin(elemRect) {
      var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var transformOrigin = this.props.transformOrigin;

      return {
        vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
        horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          modal = _props2.modal,
          onRequestClose = _props2.onRequestClose,
          open = _props2.open,
          getContentAnchorEl = _props2.getContentAnchorEl,
          anchorEl = _props2.anchorEl,
          anchorOrigin = _props2.anchorOrigin,
          role = _props2.role,
          transformOrigin = _props2.transformOrigin,
          transitionDuration = _props2.transitionDuration,
          enteredClassName = _props2.enteredClassName,
          enteringClassName = _props2.enteringClassName,
          exitedClassName = _props2.exitedClassName,
          exitingClassName = _props2.exitingClassName,
          onEnter = _props2.onEnter,
          onEntering = _props2.onEntering,
          onEntered = _props2.onEntered,
          onExit = _props2.onExit,
          onExiting = _props2.onExiting,
          onExited = _props2.onExited,
          elevation = _props2.elevation,
          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'className', 'modal', 'onRequestClose', 'open', 'getContentAnchorEl', 'anchorEl', 'anchorOrigin', 'role', 'transformOrigin', 'transitionDuration', 'enteredClassName', 'enteringClassName', 'exitedClassName', 'exitingClassName', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited', 'elevation']);


      var classes = this.context.styleManager.render(styleSheet);

      return (0, _jsx3.default)(_Modal2.default, {
        show: open,
        backdropVisible: false,
        onRequestClose: onRequestClose
      }, void 0, (0, _jsx3.default)(_Transition2.default, {
        'in': open,
        enteredClassName: enteredClassName,
        enteringClassName: enteringClassName,
        exitedClassName: exitedClassName,
        exitingClassName: exitingClassName,
        onEnter: this.handleEnter,
        onEntering: this.handleEntering,
        onEntered: onEntered,
        onExit: this.handleExit,
        onExiting: onExiting,
        onExited: onExited,
        role: role,
        onRequestTimeout: this.handleRequestTimeout,
        transitionAppear: true
      }, void 0, _react2.default.createElement(
        _Paper2.default,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(classes.popover, className),
          elevation: elevation
        }, other),
        children
      )));
    }
  }], [{
    key: 'getScale',
    value: function getScale(value) {
      return 'scale(' + value + ', ' + Math.pow(value, 2) + ')';
    }
  }]);
  return Popover;
}(_react.Component);

Popover.defaultProps = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  modal: true,
  open: false,
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  transitionDuration: 'auto',
  elevation: 8
};
Popover.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = Popover;
process.env.NODE_ENV !== "production" ? Popover.propTypes = {
  /**
   * This is the DOM element that will be used
   * to set the position of the popover.
   */
  anchorEl: _react.PropTypes.object,
  /**
   * This is the point on the anchor where the popover's
   * `targetOrigin` will attach to.
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: _customPropTypes2.default.origin,
  /**
   * The content of the component.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * CSS class or classes applied when the component is entered
   */
  elevation: _react.PropTypes.number,
  enteredClassName: _react.PropTypes.string,
  /**
   * CSS class or classes applied while the component is entering
   */
  enteringClassName: _react.PropTypes.string,
  /**
   * CSS class or classes applied when the component is exited
   */
  exitedClassName: _react.PropTypes.string,
  /**
   * CSS class or classes applied while the component is exiting
   */
  exitingClassName: _react.PropTypes.string,
  /**
   * @ignore
   */
  getContentAnchorEl: _react.PropTypes.func,
  /**
   * If `true`, the Popover will be rendered as a modal with
   * scroll locking, focus trapping and a clickaway layer beneath
   */
  modal: _react.PropTypes.bool,
  /**
   * Callback fired before the component is entering
   */
  onEnter: _react.PropTypes.func,
  /**
   * Callback fired when the component is entering
   */
  onEntering: _react.PropTypes.func,
  /**
   * Callback fired when the component has entered
   */
  onEntered: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired before the component is exiting
   */
  onExit: _react.PropTypes.func,
  /**
   * Callback fired when the component is exiting
   */
  onExiting: _react.PropTypes.func,
  /**
   * Callback fired when the component has exited
   */
  onExited: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback function fired when the popover is requested to be closed.
   *
   * @param {event} event The event that triggered the close request
   */
  onRequestClose: _react.PropTypes.func,
  /**
   * If `true`, the popover is visible.
   */
  open: _react.PropTypes.bool,
  role: _react.PropTypes.string,
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: _customPropTypes2.default.origin,
  /**
   * Set to 'auto' to automatically calculate transition time based on height
   */
  transitionDuration: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
} : void 0;