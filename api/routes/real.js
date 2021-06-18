var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/students', function (req, res, next) {
    var options = {
        method: 'GET',
        url: 'http://hp-api.herokuapp.com/api/characters',
    }
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body))
    });
});

module.exports = router;
