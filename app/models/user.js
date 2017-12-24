var mongoose = require('mongoose');
 var userSchema = mongoose.Schema({
        googleID           : String,
        username         : String
    });

module.exports = mongoose.model('my_user', userSchema);