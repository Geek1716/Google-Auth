var passport = require('passport');
var gstrat = require('passport-google-oauth20').Strategy;
var Users = require('../app/models/user');


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Users.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
	new gstrat({
		clientID: '262708239773-87df0rglk6onq1cbei7eiat3m0ikomtm.apps.googleusercontent.com',
        clientSecret: 'lB-AuNhTJUD_D60MXLApwDT-',
        callbackURL: '/auth/google/callback'
	}, function(token, refreshToken, profile, done) {

        
        process.nextTick(function() {

            
            Users.findOne({ 'googleID' : profile.id }, function(err, user) {

                
                if (err)
                    return done(err);

                
                if (user) {
                    return done(null, user); 
                } else {
                    
                    var newUser            = new Users();

                   
                    googleID    = profile.id;                 
                    username = profile.displayName;

                   
                    newUser.save(function(err) {
                    	console.log('User Saved');
                        if (err)
                            throw err;

                        
                        return done(null, newUser);
                    });
                }

            });
        });

    }));


