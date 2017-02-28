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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _colors = require('../styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiBackdrop', function (theme) {
  return {
    root: {
      zIndex: -1,
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: _colors.lightBlack,
      transition: theme.transitions.create('opacity'),
      willChange: 'opacity',
      opacity: 0
    },
    invisible: {
      backgroundColor: 'rgba(0, 0, 0, 0)'
    }
  };
}); //  weak

var Backdrop = function (_Component) {
  (0, _inherits3.default)(Backdrop, _Component);

  function Backdrop() {
    (0, _classCallCheck3.default)(this, Backdrop);
    return (0, _possibleConstructorReturn3.default)(this, (Backdrop.__proto__ || (0, _getPrototypeOf2.default)(Backdrop)).apply(this, arguments));
  }

  (0, _createClass3.default)(Backdrop, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          visible = _props.visible,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'visible']);


      var classes = this.context.styleManager.render(styleSheet);
      var backdropClass = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.invisible, !visible), className);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: backdropClass,
          'aria-hidden': 'true'
        }, other),
        children
      );
    }
  }]);
  return Backdrop;
}(_react.Component);

Backdrop.defaultProps = {
  visible: true
};
Backdrop.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = Backdrop;
process.env.NODE_ENV !== "production" ? Backdrop.propTypes = {
  /**
   * Can be used, for instance, to render a letter inside the avatar.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  visible: _react.PropTypes.bool
} : void 0;