var express = require('express');
var router = express.Router();

const arrClients = [
  { name: 'John', surname: "Carpenter", idClient: 'AJS32' },
  { name: 'Frances', surname: "Johnson", idClient: 'MLE34' },
  { name: 'Peter', surname: "Murphy", idClient: 'ASF66' },
  { name: 'Sarah', surname: "Stevenson", idClient: 'BJF13' }
]

/* GET clients listing */
//http://localhost:3000/clients
router.get('/', (req,res) => {
  //res.send("Entro a /clients"); //test to check
  res.render('clients/index', {
    arrClients: arrClients
  });
});

/* GET clients new */ 
//http://localhost:3000/clients/new
router.get('/new', (req,res) => {
  //res.send("Entro a /clients/new"); //test to check
  res.render('clients/form')
});


// POST form from new client to clients */
router.post('/create', (req,res) => {
  console.log(req.body);
  //res.send('I am in POST /clients/create'); //test to check
  res.redirect('/clients');
});


module.exports = router;
