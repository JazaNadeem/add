// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ?
    window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    :
    Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef



//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_global.js
// module id = 1
// module chunks = 0