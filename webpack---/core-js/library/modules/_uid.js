var id = 0;
var px = Math.random();
module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};



//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_uid.js
// module id = 15
// module chunks = 0