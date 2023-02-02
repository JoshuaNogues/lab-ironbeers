var express = require("express");
var router = express.Router();
const PunkAPIWrapper = require("punkapi-javascript-wrapper");
const punkAPI = new PunkAPIWrapper();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index.hbs",);
});

router.get("/beers", (req, res, next) => {
  punkAPI
    .getBeers()
    .then((beersFromAPI) =>
      res.render('beers.hbs', {beersFromAPI})
    )
    .catch((error) => console.log(error));
});

router.get('/random-beer', ((req, res, next)=>{
  punkAPI
  .getRandom()
  .then((randomBeer) => {
      // console.log(random)
      res.render('random-beer.hbs', {randomBeer});
  })
  .catch(error => console.log(error));

}))

module.exports = router;