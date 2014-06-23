var express = require('express');
var router = express.Router();
var palavra;

router.get('/', function(req, res) {

});
router.get('/:pid', function(req, res){

});
router.post('/', function(req, res){

});
router.put('/:pid', function(req, res){

});
router.delete('/:pid', function(req, res){

});


module.exports = function(p){
    palavra = p;
    return router;
};
