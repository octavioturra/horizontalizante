var express = require('express');
var router = express.Router();
var interacao;

router.get('/', function(req, res) {

});
router.get('/:iid', function(req, res){

});
router.post('/', function(req, res){

});
router.put('/:iid', function(req, res){

});
router.delete('/:iid', function(req, res){

});


module.exports = function(i){
    interacao = i;
    return router;
};
