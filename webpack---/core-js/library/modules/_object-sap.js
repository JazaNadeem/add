// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
        fn(1);
    }), 'Object', exp);
};



//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_object-sap.js
// module id = 68
// module chunks = 0