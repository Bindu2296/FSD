"use strict";
exports.__esModule = true;
var add = require("./Add");
var sub = require("./Sub");
var Multiply_1 = require("./Multiply");
var _process = function (_first, _next, _action) {
    return _action._operate(_first, _next);
};
// Actions
var _calculate = function (_first, _next, _action) {
    switch (_action) {
        case 'ADD':
            // #### ADDITION
            var _addObj = new add.Operation.Addition();
            console.log("SUM IS " + _process(_first, _next, _addObj));
            break;
        case 'SUB':
            // #### DIFFERENCE
            var _diffObj = new sub.Proc.Subtract();
            console.log("DIFF IS " + _process(_first, _next, _diffObj));
            break;
        case 'MUL':
            // #### PRODUCT
            var _mulObj = new Multiply_1.Multiply();
            console.log("PRODUCT IS " + _process(_first, _next, _mulObj));
            break;
        default:
            console.log('Please choose from ADD, SUB & MUL');
    }
};
// call the specific action
_calculate(parseInt(process.argv[2]), parseInt(process.argv[3]), process.argv[4]);
