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

exports.default = InputLabel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _Form = require('../Form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiInputLabel', function (theme) {
  var transitions = theme.transitions;

  return {
    root: {
      transformOrigin: 'top left'
    },
    formControl: {
      position: 'absolute',
      left: 0,
      top: 0,
      transform: 'translate(0, 18px) scale(1)'
    },
    shrink: {
      transform: 'translate(0, 0px) scale(0.75)',
      transformOrigin: 'top left'
    },
    animated: {
      transition: transitions.create('transform', {
        duration: transitions.duration.shorter,
        easing: transitions.easing.easeOut
      })
    }
  };
}); //  weak

function InputLabel(props, context) {
  var _classNames;

  var animated = props.animated,
      children = props.children,
      classNameProp = props.className,
      shrinkProp = props.shrink,
      other = (0, _objectWithoutProperties3.default)(props, ['animated', 'children', 'className', 'shrink']);
  var muiFormControl = context.muiFormControl,
      styleManager = context.styleManager;

  var classes = styleManager.render(styleSheet);

  var shrink = shrinkProp;

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.dirty || muiFormControl.focused;
  }

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.formControl, muiFormControl), (0, _defineProperty3.default)(_classNames, classes.animated, animated), (0, _defineProperty3.default)(_classNames, classes.shrink, shrink), _classNames), classNameProp);

  return _react2.default.createElement(
    _Form.FormLabel,
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

process.env.NODE_ENV !== "production" ? InputLabel.propTypes = {
  animated: _react.PropTypes.bool,
  /**
   * The contents of the `InputLabel`.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Whether the label should be displayed in an error state.
   */
  error: _react.PropTypes.bool,
  /**
   * Whether the input of this label is focused.
   */
  focused: _react.PropTypes.bool,
  /**
   * Whether this label should indicate that the input is required.
   */
  required: _react.PropTypes.bool,
  shrink: _react.PropTypes.bool
} : void 0;

InputLabel.defaultProps = {
  animated: true
};

InputLabel.contextTypes = {
  muiFormControl: _react.PropTypes.object,
  styleManager: _customPropTypes2.default.muiRequired
};