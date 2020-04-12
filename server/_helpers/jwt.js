const jwt = require('express-jwt');
const config = require('../config.js');
const userService = require('../users/user.service');


module.exports = {expressjwt};

function expressjwt(){
    const secret = config.secret;
    return jwt({ secret, isRevoked}).unless({
        path: [
            //public routes that don't require authentication
            '/users/authenticate',
            '/users/register',
            '../build/*',
            '/'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);
    //revoke token if user is no longer exists
    if (!user) {
        return done(null, true);
    }
    
    done();
};