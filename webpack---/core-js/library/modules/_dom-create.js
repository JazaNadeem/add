var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return is ? document.createElement(it) : {};
};



//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_dom-create.js
// module id = 32
// module chunks = 0