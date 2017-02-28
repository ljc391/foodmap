'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelCheckbox = exports.styleSheet = undefined;

var _jssThemeReactor = require('jss-theme-reactor');

var _SwitchBase = require('../internal/SwitchBase');

var _withSwitchLabel = require('../internal/withSwitchLabel');

var _withSwitchLabel2 = _interopRequireDefault(_withSwitchLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiCheckbox', function (theme) {
  return {
    default: {
      color: theme.palette.text.secondary
    },
    checked: {
      color: theme.palette.accent[500]
    },
    disabled: {
      color: theme.palette.action.disabled
    }
  };
}); //  weak

var Checkbox = (0, _SwitchBase.createSwitch)({ styleSheet: styleSheet });

Checkbox.displayName = 'Checkbox';

exports.default = Checkbox;


var LabelCheckbox = (0, _withSwitchLabel2.default)(Checkbox);

exports.LabelCheckbox = LabelCheckbox;