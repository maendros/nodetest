const express = require('express')
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient;
var db;

/**MongoClient.connect('mongodb://maendros:maendrosaek4ever@ds113628.mlab.com:13628/random_quotes', (err, database) => {
 if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})**/

app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res) => {
  var cursor = db.collection('quotes').find();
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})


/**https://zellwk.com/blog/crud-express-mongodb/
synexisw sto mongolab**/