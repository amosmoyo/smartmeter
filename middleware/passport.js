/* eslint-disable prefer-destructuring */
/* eslint-disable no-else-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable prefer-const */

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../model/user');

module.exports = (passport) => {
  // eslint-disable-next-line prefer-const
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
  opts.secretOrKey = process.env.MYSECRETE

  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.data._id, (err, user) => {
      
      if(err) {
        return done(err, false);
      }
      
      if( user ) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
  })
 ); 

}