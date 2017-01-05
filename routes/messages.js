var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function(req, res, next) {
    Message.find()
        .exec(function(err, messages) {
            if (err) {
                return res.status(500).json({
                    title: 'An error has occurred when trying to retrieve message(s).',
                    error: err
                }); // server error
            }
            
            res.status(200).json({
                message: 'Successfully retrieved message(s)!',
                obj: messages
            });
        }); // find all messages
});

router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content,
        author: 'Alex',
        date: Date.now
    });

    message.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error has occurred when trying to save message.',
                error: err
            }); // server error
        }

        res.status(201).json({
            title: 'Successfully added message!',
            obj: result
        }); // success!
    });
});

module.exports = router;
