"use strict";
exports.__esModule = true;
var add = require("./Add");
var sub = require("./Sub");
var Multiply_1 = require("./Multiply");
var ACTIONS = /** @class */ (function () {
    function ACTIONS() {
    }
    ACTIONS._SUM = new add.Operation.Addition();
    ACTIONS._DIFF = new sub.Proc.Subtract();
    ACTIONS._PRODUCT = new Multiply_1.Multiply();
    return ACTIONS;
}());
exports.ACTIONS = ACTIONS;
