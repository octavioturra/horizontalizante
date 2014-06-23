var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function (passport, Usuario) {
    passport.use(new FacebookStrategy({

        }, function (accessToken, refreshToken, profile, done) {

        });
    };
