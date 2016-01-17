var express = require('express');
var path = require('path');
var nouns = require('../../nouns');
var adjectives = require('../../adjectives');
var router = express.Router();



router.get('/adjectives',function(request,response){
    console.log('route to adjectives.json');
    response.send(adjectives);
});

router.get('/nouns',function(request,response){
    console.log('route to noun.json');
    response.send(nouns);
});

router.get('/',function (request,response){
    console.log('im the index route');
    response.sendFile(path.join(__dirname,'../public/views/index.html'));
});

module.exports = router;