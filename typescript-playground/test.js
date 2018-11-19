"use strict";
exports.__esModule = true;
var Test = /** @class */ (function () {
    function Test(i) {
        this.i = i;
    }
    Test.prototype.methodeTest = function () {
        console.log('Hallo Mosbach ' + this.i);
    };
    return Test;
}());
exports.Test = Test;
