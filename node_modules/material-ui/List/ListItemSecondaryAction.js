'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

exports.default = ListItemSecondaryAction;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiListItemSecondaryAction', function () {
  return {
    secondaryAction: {
      position: 'absolute',
      right: 4,
      top: '50%',
      marginTop: -24
    }
  };
});

function ListItemSecondaryAction(props, context) {
  var children = props.children,
      classNameProp = props.className;

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.secondaryAction, classNameProp);

  return (0, _jsx3.default)('div', {
    className: className
  }, void 0, children);
}

process.env.NODE_ENV !== "production" ? ListItemSecondaryAction.propTypes = {
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string
} : void 0;

ListItemSecondaryAction.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};

ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';