const passport = require('passport');
const FitbitStrategy = require('../lib').FitbitOAuth2Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

const fitbitStrategy = 
  new FitbitStrategy(
    {
      clientID: keys.CLIENT_ID,
      clientSecret: keys.CLIENT_SECRET,
      scope: ['activity','heartrate','sleep','profile'],
      callbackURL: "http://localhost:3000/auth/fitbit/callback"
  }, 
  (accessToken, refreshToken, profile, done) => {
    User.findOne({
      accessToken: accessToken,
      refreshToken: refreshToken,
      profile: profile
    }).then(existingUser => {
      if(existingUser){
        done(null, existingUser)
      } else {
        new User ({
          accessToken: accessToken,
          refreshToken: refreshToken,
          profile: profile
        })
        .save()
        .then(user => done(null, user))
      }
    })
  });

passport.use(fitbitStrategy);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(obj => {  
    done(null, obj);
  });
});

