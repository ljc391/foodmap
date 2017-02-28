'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPalette = exports.shades = exports.dark = exports.light = undefined;
exports.getContrastText = getContrastText;
exports.default = createPalette;

var _colors = require('./colors');

var _colorManipulator = require('./colorManipulator');

//  weak

var light = exports.light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
    icon: 'rgba(0, 0, 0, 0.38)',
    divider: 'rgba(0, 0, 0, 0.12)',
    lightDivider: 'rgba(0, 0, 0, 0.075)'
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.26)'
  },
  background: {
    default: _colors.grey[50],
    paper: _colors.white,
    appBar: _colors.grey[100],
    contentFrame: _colors.grey[200],
    status: _colors.grey[300]
  }
};

var dark = exports.dark = {
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
    divider: 'rgba(255, 255, 255, 0.12)',
    lightDivider: 'rgba(255, 255, 255, 0.075)'
  },
  action: {
    active: 'rgba(255, 255, 255, 1)',
    disabled: 'rgba(255, 255, 255, 0.3)'
  },
  background: {
    default: '#303030',
    paper: _colors.grey[800],
    appBar: _colors.grey[900],
    contentFrame: _colors.grey[900],
    status: _colors.black
  }
};

var shades = exports.shades = { dark: dark, light: light };

function getContrastText(color) {
  if ((0, _colorManipulator.getContrastRatio)(color, _colors.black) < 7) {
    return dark.text.primary;
  }
  return light.text.primary;
}

function createPalette() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$primary = _ref.primary,
      primary = _ref$primary === undefined ? _colors.indigo : _ref$primary,
      _ref$accent = _ref.accent,
      accent = _ref$accent === undefined ? _colors.pink : _ref$accent,
      _ref$error = _ref.error,
      error = _ref$error === undefined ? _colors.red : _ref$error,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'light' : _ref$type;

  return {
    type: type,
    text: shades[type].text,
    action: shades[type].action,
    background: shades[type].background,
    shades: shades,
    primary: primary,
    accent: accent,
    error: error,
    grey: _colors.grey,
    // functions
    getContrastText: getContrastText
  };
}

exports.createPalette = createPalette;