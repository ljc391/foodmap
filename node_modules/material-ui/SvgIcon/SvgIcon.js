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

exports.default = SvgIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiSvgIcon', function (theme) {
  var transitions = theme.transitions;

  return {
    svgIcon: {
      display: 'inline-block',
      fill: 'currentColor',
      height: 24,
      width: 24,
      userSelect: 'none',
      transition: transitions.create('fill', {
        duration: transitions.duration.shorter
      })
    }
  };
});

function SvgIcon(props, context) {
  var children = props.children,
      classNameProp = props.className,
      viewBox = props.viewBox,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'className', 'viewBox']);


  var classes = context.styleManager.render(styleSheet);

  var className = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.svgIcon, true), classNameProp);

  return _react2.default.createElement(
    'svg',
    (0, _extends3.default)({
      className: className,
      viewBox: viewBox
    }, other),
    children
  );
}

SvgIcon.muiName = 'SvgIcon';

process.env.NODE_ENV !== "production" ? SvgIcon.propTypes = {
  /**
   * Elements passed into the SVG Icon.
   */
  children: _react.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an svg element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the svg will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: _react.PropTypes.string
} : void 0;

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24'
};

SvgIcon.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};