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

exports.default = CardHeader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _CardContent = require('./CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiCardHeader', function () {
  return {
    cardHeader: {
      display: 'flex',
      alignItems: 'center'
    },
    avatar: {
      flex: '0 0 auto',
      marginRight: 16
    },
    content: {
      flex: '1 1 auto'
    },
    contentSecondary: {
      lineHeight: 1
    }
  };
});

function CardHeader(props, context) {
  var avatar = props.avatar,
      classNameProp = props.className,
      subhead = props.subhead,
      title = props.title,
      other = (0, _objectWithoutProperties3.default)(props, ['avatar', 'className', 'subhead', 'title']);


  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.cardHeader, classNameProp);

  if (avatar) {
    return _react2.default.createElement(
      _CardContent2.default,
      (0, _extends3.default)({ className: className }, other),
      (0, _jsx3.default)('div', {
        className: classes.avatar
      }, void 0, avatar),
      (0, _jsx3.default)('div', {
        className: classes.content
      }, void 0, (0, _jsx3.default)(_Text2.default, {
        type: 'body2',
        gutterBottom: true
      }, void 0, title), (0, _jsx3.default)(_Text2.default, {
        type: 'body2',
        secondary: true,
        className: classes.contentSecondary
      }, void 0, subhead))
    );
  }

  return _react2.default.createElement(
    _CardContent2.default,
    (0, _extends3.default)({ className: className }, other),
    (0, _jsx3.default)(_Text2.default, {
      type: 'headline'
    }, void 0, title),
    (0, _jsx3.default)(_Text2.default, {
      type: 'body1',
      secondary: true
    }, void 0, subhead)
  );
}

process.env.NODE_ENV !== "production" ? CardHeader.propTypes = {
  avatar: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  subhead: _react.PropTypes.node,
  title: _react.PropTypes.node
} : void 0;

CardHeader.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};