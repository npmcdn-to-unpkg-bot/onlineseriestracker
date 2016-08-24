/**
 * Created by stavr on 24/8/2016.
 */

var express = require ('express');
var router = express.Router();

router.get('/k', function(req,res,next){
    console.log("tou router");
});


module.exports = router;