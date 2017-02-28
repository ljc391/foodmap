'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = exports.LabelRadio = exports.Radio = exports.default = undefined;

var _Radio2 = require('./Radio');

Object.defineProperty(exports, 'LabelRadio', {
  enumerable: true,
  get: function get() {
    return _Radio2.LabelRadio;
  }
});

var _Radio3 = _interopRequireDefault(_Radio2);

var _RadioGroup2 = require('./RadioGroup');

var _RadioGroup3 = _interopRequireDefault(_RadioGroup2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Radio3.default; /* eslint-disable flowtype/require-valid-file-annotation */

exports.Radio = _Radio3.default;
exports.RadioGroup = _RadioGroup3.default;