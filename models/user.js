var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var unique = require('mongoose-unique-validator');

var userSchema = new Schema({
    username: { type: String, unique: true },
    password: { type: String, },
    email: { type: String, unique: true }
});

userSchema.plugin(unique);

module.exports = mongoose.model('User', userSchema);