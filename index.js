require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const {generateToken, verifyToken, refeshToken}= require('./token_functions/token');
const jwt = require('jsonwebtoken');

const jwtToken = generateToken({entry: 'allowed'}, JWT_SECRET);
console.log('Token: ', jwtToken);

const verified = verifyToken(jwtToken, JWT_SECRET);
console.log('Verified: ', verified);

const refreshed = verified ? jwtToken : refeshToken({value: 'refreshed token'}, JWT_SECRET)
console.log(refreshed);
console.log(jwt.verify(refreshed, JWT_SECRET))