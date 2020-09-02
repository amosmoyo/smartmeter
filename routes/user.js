/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
const express = require('express');

const bycript = require('bcryptjs')

const passport = require('passport');

const jwt = require('jsonwebtoken');

const User = require('../model/user');

const router = express.Router();

// register users
router.route('/register').post(async(req, res) => {
  // password encription
  req.body.password = bycript.hashSync(req.body.password, 10);

  const user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const newAdmin = await user.save();
    res.json(newAdmin);

  } catch (error) {
    res.status(400).json({success: false, message: 'User already exits'});
  }

});

// validate users
router.route('/login').post( async(req, res) => {
  try {
    
    const user = await User.findOne({email: req.body.email}).exec();
    console.log(user) ;

    if(!user) {
      return res.status(400).json({success: false, message: 'User does not exist'});
    }

    if(!bycript.compareSync(req.body.password, user.password)) {
      return res.status(400).json({success: false, message: 'The email or password you are using is invalid'});
    }

    if (bycript.compareSync(req.body.password, user.password)) {

      const token = jwt.sign({data: user}, process.env.MYSECRETE, {
        expiresIn: '1h'
      });

      res.status(200).json({
        success: true,
        token: `JWT ${ token}`,
        user: {
          id: user._id,
          fname: user.fname,
          lname: user.lname,
          userName: user.userName,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        },
        expiresIn: 3600
      })
    }

  } catch (error) {
    res.status(4000).json({success: false, message: error.message});
  }
});

// user dashboard
router.route('/dashboard').get(passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json(req.user);
});

module.exports = router; 
