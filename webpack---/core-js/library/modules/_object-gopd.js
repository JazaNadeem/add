var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = toIObject(O);
    P = toPrimitive(P, true);
    if (IE8_DOM_DEFINE) try {
        return gOPD(O, P);
    } catch (e) { /* empty */ }
    if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};



//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_object-gopd.js
// module id = 65
// module chunks = 0