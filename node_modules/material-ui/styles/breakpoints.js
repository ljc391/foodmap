'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createBreakpoints;
//  weak

// Sorted ASC by size. That's important.
var keys = exports.keys = ['xs', 'sm', 'md', 'lg', 'xl'];

function createBreakpoints() {
  var breakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    xs: 360,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  };
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var values = keys.map(function (n) {
    return breakpoints[n];
  });

  function up(name) {
    var value = breakpoints[name] || name;
    return '@media (min-width:' + value + unit + ')';
  }

  function down(name) {
    var value = breakpoints[name] || name;
    return '@media (max-width:' + value + unit + ')';
  }

  function between(start, end) {
    var startIndex = keys.indexOf(start);
    var endIndex = keys.indexOf(end);
    return '@media (min-width:' + values[startIndex] + unit + ') and (max-width:' + (values[endIndex + 1] - step) + unit + ')';
  }

  function only(name) {
    var keyIndex = keys.indexOf(name);
    if (keyIndex === keys.length - 1) {
      return up(name);
    }
    return between(name, name);
  }

  function getWidth(name) {
    return breakpoints[name];
  }

  return { keys: keys, values: values, up: up, down: down, only: only, getWidth: getWidth };
}