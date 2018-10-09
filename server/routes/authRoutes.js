const passport = require('passport')

const fitbitAuthenticate = passport.authenticate('fitbit', {
  successRedirect: '/auth/fitbit/success',
  failureRedirect: '/auth/fitbit/failure'
});

module.exports = app => {
  app.get('/auth/fitbit', fitbitAuthenticate);

  app.get('/auth/fitbit/callback', passport.authenticate('fitbit'), (req, res) => {
    res.redirect('/');
  });

  app.get('/auth/fitbit/success', (req, res, next) => {
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(user)
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/auth/fitbit');
  });
}