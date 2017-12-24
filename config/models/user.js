var mongoose = require('mongoose');
 var userScheme = mongoose.Schema({
 	facebook : {
 		username: String
 		GoogleID: String
 	}
 });

module.exports = mongoose.model('my_user', userSchema);