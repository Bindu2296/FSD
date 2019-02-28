"use strict";
exports.__esModule = true;
var ACTIONS = require('./_Actions').ACTIONS;
var _process = function (_first, _next, _action) {
    return _action._operate(_first, _next);
};
// Actions
var _calculate = function (_first, _next, _action) {
    switch (_action) {
        case 'SUM':
            // #### ADDITION
            var _addObj = ACTIONS._SUM;
            console.log(_action + " IS " + _process(_first, _next, _addObj));
            break;
        case 'DIFF':
            // #### DIFFERENCE
            var _diffObj = ACTIONS._DIFF;
            console.log(_action + " IS " + _process(_first, _next, _diffObj));
            break;
        case 'PRODUCT':
            // #### PRODUCT
            var _mulObj = ACTIONS._PRODUCT;
            console.log(_action + " IS " + _process(_first, _next, _mulObj));
            break;
        default:
            console.log('Please choose from SUM, DIFF & PRODUCT');
    }
};
// call the specific action
_calculate(parseInt(process.argv[2]), parseInt(process.argv[3]), process.argv[4]);
