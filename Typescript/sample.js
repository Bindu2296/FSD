var execute = function (action, x, y) {
    var result = 0;
    switch (action) {
        case 'ADD':
            return _add(x, y);
            break;
    }
};
var _add = function (x, y) {
    return x + y;
};
var _diff = function (x, y) {
    return x - y;
};
var _div = function (x, y) {
    return x / y;
};
var _mul = function (x, y) {
    return x * y;
};
var _action = 'ADD';
var _x = 10;
var _y = 5;
var result = execute(_action, _x, _y);
console.log(_action + " :: " + result);
