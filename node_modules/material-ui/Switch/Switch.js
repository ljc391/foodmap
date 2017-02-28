'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelSwitch = exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _SwitchBase = require('../internal/SwitchBase');

var _withSwitchLabel = require('../internal/withSwitchLabel');

var _withSwitchLabel2 = _interopRequireDefault(_withSwitchLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiSwitch', function (theme) {
  var palette = theme.palette,
      transitions = theme.transitions;

  return {
    root: {
      display: 'inline-flex',
      width: 62,
      position: 'relative'
    },
    default: {
      color: palette.type === 'light' ? palette.grey[50] : palette.grey[400],
      transition: transitions.create('transform', {
        duration: transitions.duration.shortest
      })
    },
    checked: {
      color: palette.accent[500],
      transform: 'translateX(14px)',
      '& + $bar': {
        backgroundColor: palette.accent[500],
        opacity: 0.5
      }
    },
    disabled: {
      color: palette.type === 'light' ? palette.grey[400] : palette.grey[800],
      '& + $bar': {
        backgroundColor: palette.type === 'light' ? '#000' : '#fff',
        opacity: palette.type === 'light' ? 0.12 : 0.1
      }
    },
    bar: {
      borderRadius: 7,
      display: 'block',
      position: 'absolute',
      width: 34,
      height: 14,
      top: '50%',
      marginTop: -7,
      left: '50%',
      marginLeft: -17,
      transition: transitions.create(['opacity', 'background-color'], {
        duration: transitions.duration.shortest
      }),
      backgroundColor: palette.type === 'light' ? '#000' : '#fff',
      opacity: palette.type === 'light' ? 0.38 : 0.3
    },
    icon: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    }
  };
});

var SwitchBase = (0, _SwitchBase.createSwitch)({ styleSheet: styleSheet });

function Switch(props, context) {
  var className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['className']);


  var classes = context.styleManager.render(styleSheet);
  var icon = (0, _jsx3.default)('div', {
    className: classes.icon
  });

  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)(classes.root, className)
  }, void 0, _react2.default.createElement(SwitchBase, (0, _extends3.default)({ icon: icon, checkedIcon: icon }, other)), (0, _jsx3.default)('div', {
    className: classes.bar
  }));
}

process.env.NODE_ENV !== "production" ? Switch.propTypes = {
  className: _react.PropTypes.string
} : void 0;

Switch.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};

exports.default = Switch;


var LabelSwitch = (0, _withSwitchLabel2.default)(Switch);

exports.LabelSwitch = LabelSwitch;