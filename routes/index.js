var express = require('express');
var router = express.Router();
const PunkAPIWrapper = require('punkapi-javascript-wrapper')
const punkAPI = new PunkAPIWrapper()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.hbs', { title: 'Express' });
});

router.get('/beers', ((req, res, next) =>{
    punkAPI.getBeers().then()
}))

module.exports = router;
