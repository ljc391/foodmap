'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = BottomNavigation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiBottomNavigation', function (theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      height: 56,
      backgroundColor: theme.palette.background.paper
    }
  };
});

function BottomNavigation(props, context) {
  var childrenProp = props.children,
      classNameProp = props.className,
      index = props.index,
      onChange = props.onChange,
      showLabel = props.showLabel,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'className', 'index', 'onChange', 'showLabel']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, classNameProp);

  var children = _react.Children.map(childrenProp, function (child, childIndex) {
    return (0, _react.cloneElement)(child, {
      selected: childIndex === index,
      showLabel: child.props.showLabel !== undefined ? child.props.showLabel : showLabel,
      index: childIndex,
      onChange: onChange
    });
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

process.env.NODE_ENV !== "production" ? BottomNavigation.propTypes = {
  /**
   * The content of the `BottomNavigation`.
   */
  children: _react.PropTypes.node.isRequired,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * The index of the currently selected `BottomNavigation`.
   */
  index: _react.PropTypes.number,
  /**
   * Function called when the index change.
   */
  onChange: _react.PropTypes.func,
  /**
   * If `true`, all the selected `BottomNavigationButton` will show his label.
   * If false, only the selected `BottomNavigationButton` will show his label.
   */
  showLabel: _react.PropTypes.bool.isRequired
} : void 0;

BottomNavigation.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};