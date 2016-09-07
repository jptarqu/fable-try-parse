"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testDecimalConversion = testDecimalConversion;

var _fableCore = require("fable-core");

function testDecimalConversion() {
  var aNum1 = 0;
  var aNum2 = 12;
  var aNum3 = 3;
  var aNum4 = 4;

  _fableCore.String.fsFormat("%M")(function (x) {
    console.log(x);
  })(aNum1);

  _fableCore.String.fsFormat("%M")(function (x) {
    console.log(x);
  })(aNum2);

  _fableCore.String.fsFormat("%M")(function (x) {
    console.log(x);
  })(aNum3);

  _fableCore.String.fsFormat("%M")(function (x) {
    console.log(x);
  })(aNum4);
}

testDecimalConversion();