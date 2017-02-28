'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var customPropTypes = {}; /* eslint-disable prefer-template */
/* eslint-disable import/no-mutable-exports*/
/* eslint-disable flowtype/require-valid-file-annotation */

if (process.env.NODE_ENV !== 'production') {
  var horizontal = _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['left', 'center', 'right']), _react.PropTypes.number]);

  var vertical = _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['top', 'center', 'bottom']), _react.PropTypes.number]);

  customPropTypes = {
    horizontal: horizontal,
    vertical: vertical,
    origin: _react.PropTypes.shape({
      horizontal: horizontal,
      vertical: vertical
    })
  };
}

if (process.env.NODE_ENV !== 'production') {
  customPropTypes.muiRequired = function (props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    var _PropTypes$object;

    var error = (_PropTypes$object = _react.PropTypes.object).isRequired.apply(_PropTypes$object, [props, propName, componentName, location, propFullName].concat(args));

    if (error) {
      error.message = 'You need to provide a theme to Material-UI. ' + 'Wrap the root component in a `<MuiThemeProvider />`. ' + '\n' + 'Have a look at http://www.material-ui.com/#/get-started/usage for an example.' + '\n' + error.message;
    }

    return error;
  };
} else {
  customPropTypes.muiRequired = function () {
    return null;
  };
}

exports.default = customPropTypes;