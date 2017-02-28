'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.createMuiTheme = createMuiTheme;

var _shadows = require('./shadows');

var _shadows2 = _interopRequireDefault(_shadows);

var _transitions = require('./transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _typography = require('./typography');

var _typography2 = _interopRequireDefault(_typography);

var _breakpoints = require('./breakpoints');

var _breakpoints2 = _interopRequireDefault(_breakpoints);

var _palette = require('./palette');

var _palette2 = _interopRequireDefault(_palette);

var _zIndex = require('./zIndex');

var _zIndex2 = _interopRequireDefault(_zIndex);

var _mixins = require('./mixins');

var _mixins2 = _interopRequireDefault(_mixins);

var _spacing = require('./spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

function createMuiTheme() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$palette = config.palette,
      palette = _config$palette === undefined ? (0, _palette2.default)() : _config$palette,
      _config$breakpoints = config.breakpoints,
      breakpoints = _config$breakpoints === undefined ? (0, _breakpoints2.default)() : _config$breakpoints,
      _config$mixins = config.mixins,
      mixins = _config$mixins === undefined ? (0, _mixins2.default)(breakpoints, _spacing2.default) : _config$mixins,
      _config$typography = config.typography,
      typography = _config$typography === undefined ? (0, _typography2.default)(palette) : _config$typography,
      more = (0, _objectWithoutProperties3.default)(config, ['palette', 'breakpoints', 'mixins', 'typography']);


  var theme = (0, _extends3.default)({
    dir: 'ltr',
    palette: palette,
    typography: typography,
    shadows: _shadows2.default,
    transitions: _transitions2.default,
    mixins: mixins,
    spacing: _spacing2.default,
    breakpoints: breakpoints,
    zIndex: _zIndex2.default
  }, more);

  return theme;
}

exports.default = createMuiTheme;