var express = require('express');
var router = express.Router();
var usuario;

router.get('/', function(req, res) {

});

router.get('/facebook', function(req, res) {

});

router.post('/facebook', function(req, res) {

});

router.get('/facebook/callback', function(req, res) {

});

module.exports = function setup(u){
    usuario = u
    return router;
};
