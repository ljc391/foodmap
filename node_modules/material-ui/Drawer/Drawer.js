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

var _Modal = require('../internal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _Slide = require('../transitions/Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _transitions = require('../styles/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

function getSlideDirection(anchor) {
  if (anchor === 'left') {
    return 'right';
  } else if (anchor === 'right') {
    return 'left';
  } else if (anchor === 'top') {
    return 'down';
  } else if (anchor === 'bottom') {
    return 'up';
  }

  return 'left';
}

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiDrawer', function (theme) {
  return {
    paper: {
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      flex: '1 0 auto',
      position: 'fixed',
      top: 0,
      zIndex: theme.zIndex.navDrawer,
      willChange: 'transform',
      '&:focus': {
        outline: 'none'
      },
      WebkitOverflowScrolling: 'touch' },
    docked: {
      flex: '0 0 auto',
      '& $paper': {
        borderRight: '1px solid ' + theme.palette.text.divider
      }
    },
    modal: {}
  };
});

/**
 * This is a drawer.
 */

var Drawer = function (_Component) {
  (0, _inherits3.default)(Drawer, _Component);

  function Drawer() {
    (0, _classCallCheck3.default)(this, Drawer);
    return (0, _possibleConstructorReturn3.default)(this, (Drawer.__proto__ || (0, _getPrototypeOf2.default)(Drawer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Drawer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          anchorProp = _props.anchor,
          children = _props.children,
          className = _props.className,
          docked = _props.docked,
          enterTransitionDuration = _props.enterTransitionDuration,
          leaveTransitionDuration = _props.leaveTransitionDuration,
          open = _props.open,
          paperClassName = _props.paperClassName,
          elevation = _props.elevation,
          other = (0, _objectWithoutProperties3.default)(_props, ['anchor', 'children', 'className', 'docked', 'enterTransitionDuration', 'leaveTransitionDuration', 'open', 'paperClassName', 'elevation']);
      var _context$styleManager = this.context.styleManager,
          dir = _context$styleManager.theme.dir,
          render = _context$styleManager.render;

      var classes = render(styleSheet);
      var rtl = dir === 'rtl';
      var anchor = anchorProp || (rtl ? 'right' : 'left');
      var slideDirection = getSlideDirection(anchor);

      var drawer = (0, _jsx3.default)(_Slide2.default, {
        'in': open,
        direction: slideDirection,
        enterTransitionDuration: enterTransitionDuration,
        leaveTransitionDuration: leaveTransitionDuration,
        transitionAppear: true
      }, void 0, (0, _jsx3.default)(_Paper2.default, {
        elevation: docked ? 0 : elevation,
        rounded: false,
        className: (0, _classnames2.default)(classes.paper, paperClassName)
      }, void 0, children));

      var containerProps = (0, _extends3.default)({
        className: (0, _classnames2.default)(classes.modal, className)
      }, other);

      if (docked) {
        return (0, _jsx3.default)('div', {
          className: (0, _classnames2.default)(classes.docked, className)
        }, void 0, drawer);
      }

      return _react2.default.createElement(
        _Modal2.default,
        (0, _extends3.default)({
          backdropTransitionDuration: open ? enterTransitionDuration : leaveTransitionDuration
        }, containerProps, {
          show: open
        }),
        drawer
      );
    }
  }]);
  return Drawer;
}(_react.Component);

Drawer.defaultProps = {
  docked: false,
  enterTransitionDuration: _transitions.duration.enteringScreen,
  leaveTransitionDuration: _transitions.duration.leavingScreen,
  open: false,
  elevation: 16
};
Drawer.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = Drawer;
process.env.NODE_ENV !== "production" ? Drawer.propTypes = {
  /**
   * Side, which will `Drawer` appears from.
   */
  anchor: _react.PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  /**
   * The contents of the `Drawer`.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If set to true, the drawer will dock itself
   * and will no longer slide in with an overlay.
   */
  docked: _react.PropTypes.bool,
  /**
   * The elevation of the `Drawer`.
   */
  elevation: _react.PropTypes.number,
  /**
   * Customizes duration of enter animation (ms)
   */
  enterTransitionDuration: _react.PropTypes.number,
  /**
   * Customizes duration of leave animation (ms)
   */
  leaveTransitionDuration: _react.PropTypes.number,
  /**
   * Callback fired when the internal modal requests to be closed.
   */
  onRequestClose: _react.PropTypes.func,
  /**
   * If true, the `Drawer` is open.
   */
  open: _react.PropTypes.bool,
  /**
   * The CSS class name of the paper element.
   */
  paperClassName: _react.PropTypes.string
} : void 0;