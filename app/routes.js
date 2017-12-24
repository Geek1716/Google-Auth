module.exports = function(app,passport){

	app.get('/',function(req,res){
		res.render('home', {user : req.user});
	});

	app.get('/auth/logout', function(req,res){
		req.logout();
		res.redirect('/');
	})

	app.get('/auth/login', function(req,res){
		res.render('login',{user:req.user});
	});

	app.get('/auth/google',passport.authenticate('google',{
		scope : ['profile']
	}));
	app.get('/auth/google/callback', passport.authenticate('google'),function(req,res){
		res.send('Successfully Logged In');
	});

}