module.exports = function(exec) {
    try {
        return !!exec();
    } catch (e) {
        return true;
    }
};



//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_fails.js
// module id = 9
// module chunks = 0