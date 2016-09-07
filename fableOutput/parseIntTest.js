"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.potentialDecOpt = exports.potentialOpt = exports.ConversionHelpers = undefined;
exports.testParseInt = testParseInt;
exports.testParseDecimal = testParseDecimal;

var _fableCore = require("fable-core");

var ConversionHelpers = exports.ConversionHelpers = function ($exports) {
  var tryParseWith = $exports.tryParseWith = function tryParseWith(tryParseFunc) {
    return function ($var1) {
      return function (_arg1) {
        return _arg1[0] ? _arg1[1] : null;
      }(tryParseFunc($var1));
    };
  };

  var tryParseInt = $exports.tryParseInt = tryParseWith(function (arg00) {
    return isNaN(parseInt(arg00)) ? [0, false] : [true, parseInt(arg00)];
  });
  var tryParseDecimal = $exports.tryParseDecimal = tryParseWith(function (arg00) {
    return isNaN(parseFloat(arg00)) ? [0, false] : [true, parseFloat(arg00)];
  });
  return $exports;
}({});

function testParseInt(str) {
  var aNum = ConversionHelpers.tryParseInt(str);
  return aNum;
}

function testParseDecimal(str) {
  var aNum = ConversionHelpers.tryParseDecimal(str);
  return aNum;
}

_fableCore.String.fsFormat("Testing parseInt")(function (x) {
  console.log(x);
});

_fableCore.String.fsFormat("==================================")(function (x) {
  console.log(x);
});

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(testParseInt("4"));

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(testParseInt("Ancuc"));

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(testParseInt("5"));

var potentialOpt = exports.potentialOpt = testParseInt("aro3Badnumber");

if (potentialOpt == null) {
  _fableCore.String.fsFormat("None was handled here")(function (x) {
    console.log(x);
  });
} else {
  var n = potentialOpt;

  _fableCore.String.fsFormat("%d")(function (x) {
    console.log(x);
  })(n);
}

_fableCore.String.fsFormat("Testing parseDecimal")(function (x) {
  console.log(x);
});

_fableCore.String.fsFormat("==================================")(function (x) {
  console.log(x);
});

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(testParseDecimal("7.000"));

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(testParseDecimal("4.01"));

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(testParseDecimal("Ancuc.lo"));

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(testParseDecimal("5.2067"));

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(testParseDecimal("10"));

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(testParseDecimal("24"));

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(testParseDecimal("7.000001"));

var potentialDecOpt = exports.potentialDecOpt = testParseDecimal("aro3Badnumber");

if (potentialDecOpt == null) {
  _fableCore.String.fsFormat("None was handled here")(function (x) {
    console.log(x);
  });
} else {
  var n = potentialDecOpt;

  _fableCore.String.fsFormat("%M")(function (x) {
    console.log(x);
  })(n);
}