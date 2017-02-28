'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createTypography;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var defaultConstants = {
  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500
};

function createTypography(palette) {
  var constants = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultConstants;

  return (0, _extends3.default)({}, constants, {
    display4: {
      fontSize: 112,
      fontWeight: constants.fontWeightLight,
      fontFamily: constants.fontFamily,
      letterSpacing: '-.04em',
      lineHeight: 1,
      color: palette.text.secondary
    },
    display3: {
      fontSize: 56,
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamily,
      letterSpacing: '-.02em',
      lineHeight: 1.35,
      color: palette.text.secondary
    },
    display2: {
      fontSize: 45,
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamily,
      lineHeight: '48px',
      color: palette.text.secondary
    },
    display1: {
      fontSize: 34,
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamily,
      lineHeight: '40px',
      color: palette.text.secondary
    },
    headline: {
      fontSize: 24,
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamily,
      lineHeight: '32px',
      color: palette.text.primary
    },
    title: {
      fontSize: 21,
      fontWeight: constants.fontWeightMedium,
      fontFamily: constants.fontFamily,
      lineHeight: 1,
      color: palette.text.primary
    },
    subheading: {
      fontSize: 16,
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamily,
      lineHeight: '24px',
      color: palette.text.primary
    },
    body2: {
      fontSize: 14,
      fontWeight: constants.fontWeightMedium,
      fontFamily: constants.fontFamily,
      lineHeight: '24px',
      color: palette.text.primary
    },
    body1: {
      fontSize: 14,
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamily,
      lineHeight: '20px',
      color: palette.text.primary
    },
    caption: {
      fontSize: 12,
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamily,
      lineHeight: 1,
      color: palette.text.secondary
    },
    materialIcon: {
      fontFamily: 'Material Icons',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 24,
      display: 'inline-block',
      lineHeight: 1,
      textTransform: 'none'
    }
  });
}