var express = require('express');
var router = express.Router();

var User = require('../models/user');

// Post to database
router.post('/', function(req, res, next) {
    var user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }); // create our new user

    user.save(function(err, success) { // save the user and let us know what happened
        if (err) {
            return res.status(500).json({
                error_message: 'There was an error adding the user!',
                error: err
            }); // an error occurred - jump out via 'return'
        }

        res.status(200).json({
            success_message: 'User added!',
            success: success,
        }); // user added!
    });
});

module.exports = router; // make it available