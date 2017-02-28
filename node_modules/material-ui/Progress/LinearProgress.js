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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiLinearProgress', function (theme) {
  var palette = theme.palette;

  var transitionDuration = 4; // 400ms

  return {
    root: {
      position: 'relative',
      overflow: 'hidden',
      height: 5,
      backgroundColor: palette.primary[100]
    },
    rootBuffer: {
      backgroundColor: 'transparent'
    },
    rootQuery: {
      transform: 'rotate(180deg)'
    },
    bar: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      top: 0,
      transition: 'transform 0.2s linear',
      backgroundColor: palette.primary[500]
    },
    dashed: {
      position: 'absolute',
      marginTop: 0,
      height: '100%',
      width: '100%',
      background: 'radial-gradient(' + palette.primary[100] + ' 0%, ' + palette.primary[100] + ' 16%, transparent 42%)',
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px',
      animation: 'buffer 3s infinite linear'
    },
    indeterminateBar1: {
      willChange: 'left, right',
      animation: 'indeterminate-1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
    },
    indeterminateBar2: {
      willChange: 'left, right',
      animation: 'indeterminate-2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
      animationDelay: '1.15s'
    },
    determinateBar1: {
      willChange: 'width',
      transition: 'width .' + transitionDuration + 's linear'
    },
    determinateBar2: {
      display: 'none'
    },
    bufferBar1: {
      transition: 'width .' + transitionDuration + 's linear',
      backgroundColor: palette.primary[100]
    },
    bufferBar2: {
      transition: 'width .' + transitionDuration + 's linear'
    },
    '@keyframes indeterminate-1': {
      '0%': {
        left: '-35%',
        right: '100%'
      },
      '60%': {
        left: '100%',
        right: '-90%'
      },
      '100%': {
        left: '100%',
        right: '-90%'
      }
    },
    '@keyframes indeterminate-2': {
      '0%': {
        left: '-200%',
        right: '100%'
      },
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    },
    '@keyframes buffer': {
      '0%': {
        opacity: 1,
        backgroundPosition: '0px -23px'
      },
      '50%': {
        opacity: 0,
        backgroundPosition: '0px -23px'
      },
      '100%': {
        opacity: 1,
        backgroundPosition: '-200px -23px'
      }
    },
    '@keyframes query': {
      '0%': {
        opacity: 1,
        transform: 'translateX(35%) scale(.3, 1)'
      },
      '100%': {
        opacity: 0,
        transform: 'translateX(-50%) scale(0, 1)'
      }
    }
  };
});

var LinearProgress = function (_Component) {
  (0, _inherits3.default)(LinearProgress, _Component);

  function LinearProgress() {
    (0, _classCallCheck3.default)(this, LinearProgress);
    return (0, _possibleConstructorReturn3.default)(this, (LinearProgress.__proto__ || (0, _getPrototypeOf2.default)(LinearProgress)).apply(this, arguments));
  }

  (0, _createClass3.default)(LinearProgress, [{
    key: 'render',
    value: function render() {
      var _classNames, _classNames3, _classNames4;

      var _props = this.props,
          className = _props.className,
          mode = _props.mode,
          value = _props.value,
          valueBuffer = _props.valueBuffer,
          other = (0, _objectWithoutProperties3.default)(_props, ['className', 'mode', 'value', 'valueBuffer']);

      var classes = this.context.styleManager.render(styleSheet);
      var rootClasses = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.rootBuffer, mode === 'buffer'), (0, _defineProperty3.default)(_classNames, classes.rootQuery, mode === 'query'), _classNames), className);
      var dashedClasses = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.dashed, mode === 'buffer'));
      var bar1Classes = (0, _classnames2.default)(classes.bar, (_classNames3 = {}, (0, _defineProperty3.default)(_classNames3, classes.indeterminateBar1, mode === 'indeterminate' || mode === 'query'), (0, _defineProperty3.default)(_classNames3, classes.determinateBar1, mode === 'determinate'), (0, _defineProperty3.default)(_classNames3, classes.bufferBar1, mode === 'buffer'), _classNames3));
      var bar2Classes = (0, _classnames2.default)(classes.bar, (_classNames4 = {}, (0, _defineProperty3.default)(_classNames4, classes.indeterminateBar2, mode === 'indeterminate' || mode === 'query'), (0, _defineProperty3.default)(_classNames4, classes.determinateBar2, mode === 'determinate'), (0, _defineProperty3.default)(_classNames4, classes.bufferBar2, mode === 'buffer'), _classNames4));
      var styles = { bar1: {}, bar2: {} };
      var rootProps = {};

      if (mode === 'determinate') {
        styles.bar1.width = value + '%';
        rootProps['aria-valuenow'] = Math.round(value);
      } else if (mode === 'buffer') {
        styles.bar1.width = valueBuffer + '%';
        styles.bar2.width = value + '%';
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: rootClasses }, rootProps, other),
        (0, _jsx3.default)('div', {
          className: dashedClasses
        }),
        (0, _jsx3.default)('div', {
          className: bar1Classes,
          style: styles.bar1
        }),
        (0, _jsx3.default)('div', {
          className: bar2Classes,
          style: styles.bar2
        })
      );
    }
  }]);
  return LinearProgress;
}(_react.Component);

LinearProgress.defaultProps = {
  mode: 'indeterminate',
  value: 0
};
LinearProgress.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = LinearProgress;
process.env.NODE_ENV !== "production" ? LinearProgress.propTypes = {
  className: _react.PropTypes.string,
  /**
   * The mode of show your progress, indeterminate
   * for when there is no value for progress.
   */
  mode: _react.PropTypes.oneOf(['determinate', 'indeterminate', 'buffer', 'query']),
  /**
   * The value of progress, only works in determinate and buffer mode.
   * Value between 0 and 100.
   */
  value: _react.PropTypes.number,
  /**
   * The value of buffer, only works in buffer mode.
   * Value between 0 and 100.
   */
  valueBuffer: _react.PropTypes.number
} : void 0;