"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.potentialOpt = exports.tryParseOpt = undefined;
exports.testParseInt = testParseInt;

var _fableCore = require("fable-core");

var tryParseOpt = exports.tryParseOpt = function tryParseOpt($var1) {
  return function (_arg1) {
    return _arg1[0] ? _arg1[1] : null;
  }(function (arg00) {
    return isNaN(parseInt(arg00)) ? [0, false] : [true, parseInt(arg00)];
  }($var1));
};

function testParseInt(str) {
  var aNum = tryParseOpt(str);
  return aNum;
}

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(3);

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})();

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(testParseInt("4"));

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(testParseInt("Ancuc"));

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(testParseInt("aro3"));

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(testParseInt("5"));

var potentialOpt = exports.potentialOpt = testParseInt("aro3Badnumber");

if (potentialOpt == null) {
  _fableCore.String.fsFormat("None")(function (x) {
    console.log(x);
  });
} else {
  var n = potentialOpt;

  _fableCore.String.fsFormat("%d")(function (x) {
    console.log(x);
  })(n);
}