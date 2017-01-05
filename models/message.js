var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema= new Schema({
    content: String,
    author: String,
    messageId: String
}); 

module.exports = mongoose.model('Message', messageSchema);