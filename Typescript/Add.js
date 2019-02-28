"use strict";
exports.__esModule = true;
var Operation;
(function (Operation) {
    var Addition = /** @class */ (function () {
        function Addition() {
            this._operate = function (_first, _next) {
                return _first + _next;
            };
        }
        return Addition;
    }());
    Operation.Addition = Addition;
})(Operation = exports.Operation || (exports.Operation = {}));
