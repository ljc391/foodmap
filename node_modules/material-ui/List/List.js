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

exports.default = List;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiList', function () {
  return {
    root: {
      flex: '1 1 auto',
      overflow: 'auto',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    padding: {
      paddingTop: 8,
      paddingBottom: 8
    },
    subheader: {
      paddingTop: 0
    }
  };
});

/**
 * A simple list component.
 */
function List(props, context) {
  var _classNames;

  var classNameProp = props.className,
      ComponentProp = props.component,
      padding = props.padding,
      children = props.children,
      subheader = props.subheader,
      rootRef = props.rootRef,
      other = (0, _objectWithoutProperties3.default)(props, ['className', 'component', 'padding', 'children', 'subheader', 'rootRef']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.padding, padding), (0, _defineProperty3.default)(_classNames, classes.subheader, subheader), _classNames), classNameProp);

  return _react2.default.createElement(
    ComponentProp,
    (0, _extends3.default)({ ref: rootRef, className: className }, other),
    subheader,
    children
  );
}

process.env.NODE_ENV !== "production" ? List.propTypes = {
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a ReactElement.
   */
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  padding: _react.PropTypes.bool,
  /**
   * @ignore
   */
  rootRef: _react.PropTypes.func,
  subheader: _react.PropTypes.node
} : void 0;

List.defaultProps = {
  component: 'div',
  padding: true
};

List.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};