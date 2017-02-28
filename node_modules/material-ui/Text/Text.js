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

exports.default = Text;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiText', function (theme) {
  return {
    text: {
      display: 'block',
      margin: 0
    },
    display4: theme.typography.display4,
    display3: theme.typography.display3,
    display2: theme.typography.display2,
    display1: theme.typography.display1,
    headline: theme.typography.headline,
    title: theme.typography.title,
    subheading: theme.typography.subheading,
    body2: theme.typography.body2,
    body1: theme.typography.body1,
    caption: theme.typography.caption,
    button: theme.typography.button,
    'align-left': {
      textAlign: 'left'
    },
    'align-center': {
      textAlign: 'center'
    },
    'align-right': {
      textAlign: 'right'
    },
    'align-justify': {
      textAlign: 'justify'
    },
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    gutterBottom: {
      marginBottom: '0.35em'
    },
    paragraph: {
      marginBottom: theme.spacing.unit * 2
    },
    colorInherit: {
      color: 'inherit'
    },
    secondary: {
      color: theme.palette.text.secondary
    }
  };
});

function Text(props, context) {
  var _classNames;

  var align = props.align,
      classNameProp = props.className,
      colorInherit = props.colorInherit,
      componentProp = props.component,
      gutterBottom = props.gutterBottom,
      noWrap = props.noWrap,
      paragraph = props.paragraph,
      secondary = props.secondary,
      type = props.type,
      other = (0, _objectWithoutProperties3.default)(props, ['align', 'className', 'colorInherit', 'component', 'gutterBottom', 'noWrap', 'paragraph', 'secondary', 'type']);

  var classes = context.styleManager.render(styleSheet);

  var className = (0, _classnames2.default)(classes.text, classes[type], (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.colorInherit, colorInherit), (0, _defineProperty3.default)(_classNames, classes.noWrap, noWrap), (0, _defineProperty3.default)(_classNames, classes.secondary, secondary), (0, _defineProperty3.default)(_classNames, classes.gutterBottom, gutterBottom), (0, _defineProperty3.default)(_classNames, classes.paragraph, paragraph), (0, _defineProperty3.default)(_classNames, classes['align-' + align], align), _classNames), classNameProp);

  var Component = paragraph ? 'p' : componentProp;

  return _react2.default.createElement(Component, (0, _extends3.default)({ className: className }, other));
}

process.env.NODE_ENV !== "production" ? Text.propTypes = {
  align: _react.PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  colorInherit: _react.PropTypes.bool,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a ReactElement.
   */
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  gutterBottom: _react.PropTypes.bool,
  noWrap: _react.PropTypes.bool,
  paragraph: _react.PropTypes.bool,
  secondary: _react.PropTypes.bool,
  type: _react.PropTypes.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button'])
} : void 0;

Text.defaultProps = {
  colorInherit: false,
  component: 'span',
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  secondary: false,
  type: 'body1'
};

Text.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};