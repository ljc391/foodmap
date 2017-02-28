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

var _transitions = require('../styles/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var THICKNESS = 3.6; //  weak

var PI = 3.1415; // Simple version of Math.PI for the css generated.

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiCircularProgress', function (theme) {
  return {
    root: {
      display: 'inline-block',
      color: theme.palette.primary[500]
    },
    svg: {
      // The main animation is loop 4 times (4 / 3 * 1300).
      animation: 'rotate-progress-circle 1733ms linear infinite'
    },
    circle: {
      strokeDasharray: '1, calc((100% - 3px) * 3.141)',
      strokeDashoffset: '0%',
      stroke: 'currentColor',
      strokeLinecap: 'square',
      transition: theme.transitions.create('all', { duration: 1300 }),
      animation: 'scale-progress-circle 1300ms ' + _transitions.easing.easeInOut + ' infinite'
    },
    '@keyframes rotate-progress-circle': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    '@keyframes scale-progress-circle': {
      '8%': {
        strokeDasharray: '1, calc((100% - ' + THICKNESS + 'px) * ' + PI + ')',
        strokeDashoffset: 0
      },
      '50%, 58%': {
        strokeDasharray: 'calc((65% - ' + THICKNESS + 'px) * ' + PI + '), calc((100% - ' + THICKNESS + 'px) * ' + PI + ')',
        strokeDashoffset: 'calc((25% - ' + THICKNESS + 'px) * -' + PI + ')'
      },
      '100%': {
        strokeDasharray: 'calc((65% - ' + THICKNESS + 'px) * ' + PI + '), calc((100% - ' + THICKNESS + 'px) * ' + PI + ')',
        strokeDashoffset: 'calc((99% - ' + THICKNESS + 'px) * -' + PI + ')'
      }
    }
  };
});

var CircularProgress = function (_Component) {
  (0, _inherits3.default)(CircularProgress, _Component);

  function CircularProgress() {
    (0, _classCallCheck3.default)(this, CircularProgress);
    return (0, _possibleConstructorReturn3.default)(this, (CircularProgress.__proto__ || (0, _getPrototypeOf2.default)(CircularProgress)).apply(this, arguments));
  }

  (0, _createClass3.default)(CircularProgress, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          mode = _props.mode,
          size = _props.size,
          other = (0, _objectWithoutProperties3.default)(_props, ['className', 'mode', 'size']);

      var classes = this.context.styleManager.render(styleSheet);
      var radius = size / 2;

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: (0, _classnames2.default)(classes.root, className),
          style: { width: size, height: size }
        }, other),
        (0, _jsx3.default)('svg', {
          className: classes.svg,
          viewBox: '0 0 ' + size + ' ' + size
        }, void 0, (0, _jsx3.default)('circle', {
          className: classes.circle,
          cx: radius,
          cy: radius,
          r: radius - THICKNESS / 2,
          fill: 'none',
          strokeWidth: THICKNESS,
          strokeMiterlimit: '20'
        }))
      );
    }
  }]);
  return CircularProgress;
}(_react.Component);

CircularProgress.defaultProps = {
  mode: 'indeterminate',
  size: 40
};
CircularProgress.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = CircularProgress;
process.env.NODE_ENV !== "production" ? CircularProgress.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * The mode of show your progress, indeterminate
   * for when there is no value for progress.
   */
  mode: _react.PropTypes.oneOf(['determinate', 'indeterminate']),
  /**
   * The size of the circle.
   */
  size: _react.PropTypes.number,
  /**
   * The value of progress, only works in determinate mode.
   */
  value: _react.PropTypes.number
} : void 0;