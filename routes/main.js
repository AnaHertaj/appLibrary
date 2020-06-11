var express = require('express');
var router = express.Router();

/* GET home page (main/index) */
//http://localhost:3000/
router.get('/', function(req, res, next) {
  res.render('main/index', { text: "Founded in 1841, Mery's Library is one of the world's leading literary institutions. Members can browse and borrow our outstanding collection of books and resources, attend special events, and use our beautiful spaces in the city center." });
});

/* GET about page (main/about) */
//http://localhost:3000/about
router.get('/about', function(req, res, next) {
  res.render('main/about', { text: "This application has been developed by Ana Hertaj, thanks to Mario's MEAN STACK Course." });
});

module.exports = router;
