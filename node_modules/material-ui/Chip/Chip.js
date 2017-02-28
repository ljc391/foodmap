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

exports.default = Chip;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _cancel = require('../svg-icons/cancel');

var _cancel2 = _interopRequireDefault(_cancel);

var _colorManipulator = require('../styles/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiChip', function (theme) {
  var palette = theme.palette,
      shadows = theme.shadows,
      transitions = theme.transitions;

  var height = 32;
  var backgroundColor = (0, _colorManipulator.emphasize)(palette.background.default, 0.12);
  var deleteIconColor = (0, _colorManipulator.fade)(palette.text.primary, 0.26);
  return {
    root: {
      fontFamily: 'inherit', // Override `button` default system font
      fontSize: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      color: palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: height / 2,
      whiteSpace: 'nowrap',
      width: 'fit-content',
      transition: transitions.create(),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      outline: 'none', // No outline on focused element in Chrome (as triggered by tabIndex prop)
      border: 'none', // Remove `button` border
      padding: 0 },
    clickable: {
      '&:hover, &:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: shadows[1],
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.12)
      },
      cursor: 'pointer'
    },
    deletable: {
      '&:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      }
    },
    avatar: {
      marginRight: -4,
      width: 32,
      height: 32,
      fontSize: 16
    },
    avatarChildren: {
      width: 19,
      height: 19
    },
    label: {
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap',
      cursor: 'inherit'
    },
    deleteIcon: {
      color: deleteIconColor,
      '&:hover': {
        color: (0, _colorManipulator.fade)(deleteIconColor, 0.4)
      },
      cursor: 'pointer',
      margin: '0 4px 0 -8px'
    }
  };
});

/**
 * Chips represent complex entities in small blocks, such as a contact.
 *
 * ```jsx
 * <Chip avatar={<Avatar />} label="Label text" />
 * ```
 */
//  weak

function Chip(props, context) {
  var avatarProp = props.avatar,
      classNameProp = props.className,
      deleteIconClassNameProp = props.deleteIconClassName,
      label = props.label,
      labelClassNameProp = props.labelClassName,
      onClick = props.onClick,
      onKeyDown = props.onKeyDown,
      onRequestDelete = props.onRequestDelete,
      tabIndexProp = props.tabIndex,
      other = (0, _objectWithoutProperties3.default)(props, ['avatar', 'className', 'deleteIconClassName', 'label', 'labelClassName', 'onClick', 'onKeyDown', 'onRequestDelete', 'tabIndex']);


  var chipRef = void 0;

  var handleDeleteIconClick = function handleDeleteIconClick(event) {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();
    onRequestDelete(event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    var key = (0, _keycode2.default)(event);

    if (onClick && (key === 'space' || key === 'enter')) {
      event.preventDefault();
      onClick(event);
    } else if (onRequestDelete && key === 'backspace') {
      event.preventDefault();
      onRequestDelete(event);
    } else if (key === 'esc') {
      event.preventDefault();
      chipRef.blur();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.clickable, onClick), (0, _defineProperty3.default)({}, classes.deletable, onRequestDelete), classNameProp);
  var labelClassName = (0, _classnames2.default)(classes.label, labelClassNameProp);

  var deleteIcon = null;
  if (onRequestDelete) {
    var deleteIconClassName = (0, _classnames2.default)(classes.deleteIcon, deleteIconClassNameProp);
    deleteIcon = (0, _jsx3.default)(_cancel2.default, {
      className: deleteIconClassName,
      onClick: handleDeleteIconClick
    });
  }

  var avatar = null;
  if (avatarProp && (0, _react.isValidElement)(avatarProp)) {
    avatar = (0, _react.cloneElement)(avatarProp, {
      className: (0, _classnames2.default)(classes.avatar, avatarProp.props.className),
      childrenClassName: (0, _classnames2.default)(classes.avatarChildren, avatarProp.props.childrenClassName)
    });
  }

  var tabIndex = onClick || onRequestDelete ? tabIndexProp : -1;

  return _react2.default.createElement(
    'button',
    (0, _extends3.default)({
      className: className,
      onClick: onClick,
      tabIndex: tabIndex,
      onKeyDown: handleKeyDown,
      ref: function ref(c) {
        chipRef = c;
      }
    }, other),
    avatar,
    (0, _jsx3.default)('span', {
      className: labelClassName
    }, void 0, label),
    deleteIcon
  );
}

process.env.NODE_ENV !== "production" ? Chip.propTypes = {
  /**
   * Avatar element.
   */
  avatar: _react.PropTypes.node,
  /**
   * CSS `className` of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * CSS `className` of the delete icon element.
   */
  deleteIconClassName: _react.PropTypes.string,
  /**
   * The label text.
   */
  label: _react.PropTypes.node,
  /**
   * CSS `className` of the label.
   */
  labelClassName: _react.PropTypes.string,
  /**
   * @ignore
   */
  onClick: _react.PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: _react.PropTypes.func,
  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   * @param {object} event `onClick` event targeting the delete icon element.
   */
  onRequestDelete: _react.PropTypes.func,
  /**
   * @ignore
   */
  tabIndex: _react.PropTypes.number
} : void 0;

Chip.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};