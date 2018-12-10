const crypto = require('crypto')

const key = 'nodeJWTStudy'

var Signature = function() {}

Signature.prototype.getSignature = function(header, payload) {
    console.log('Signature -> header :' + header)
    console.log('Signature -> payload :' + payload)
    return crypto.createHmac('sha256', key)
    .update(header + '.' + payload)
    .digest('base64')
    .replace('=', '')
}

module.exports = new Signature()