module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};



//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_property-desc.js
// module id = 14
// module chunks = 0