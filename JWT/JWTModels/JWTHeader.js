var type = 'JWT';
var alg = 'HS256';


function header() {}

header.prototype.GetItem = function() {
    var header = {
        "alg" : alg,
        "typ" : type
    };
    return header;
}

module.exports = new header()