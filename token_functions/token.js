const jwt = require('jsonwebtoken');

const generateToken = (data, secret) => {
    const tokenOptions = {
        expiresIn: '1hr'
    }

    const value = jwt.sign(data, secret, tokenOptions)
    return value;
}

const verifyToken = (token, secret) => {
    const tokenVerified = jwt.verify(token, secret, function(error, decoded) {
        if (error) {
            console.log({...error});
            switch (error.message) {
                case 'jwt malformed':
                    return 'token error'
                case 'jwt expired':
                    return 'Expired Token'
                default:
                    break;
            }
        }
        return decoded;
    })

    return tokenVerified
}

const refeshToken = (data, secret) => {
    const tokenOptions = {
        expiresIn: '1hr'
    }

    const refreshedToken = jwt.sign(data, secret, tokenOptions)

    return refreshedToken;
}

module.exports = {
    generateToken,
    verifyToken,
    refeshToken
}