const express = require('express');
const jwtModel = require('./JWT/JWTModel');
const jwtEncoder = require('./JWT/JWTEncoder');
const Signature = require('./JWT/JWTSignature')

const app = express();
const port = 3000;

app.listen(port, () => {
    var jwt = Signature.getSignature(jwtEncoder(jwtModel.JWTHeader.GetItem()), jwtEncoder(jwtModel.JWTPayload.GetItem()))

    console.log('Token : '
    +jwtEncoder(jwtModel.JWTHeader.GetItem())
    +'.'+
    jwtEncoder(jwtModel.JWTPayload.GetItem())
    +'.'+
    jwt)
});