
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


const port = 3000
const client  = require('./mongo.js')
var db
//connect db
client.connect(function(err, client) {
console.log("connected to db")
db = client.db(client.dbName1);
})

//cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//setup express server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



//add user to db

app.post('/adduser',  (req, res) => {
     console.log(req.body)
      db.collection('users').insertOne(req.body, function(err, response) {
      
        res.send(response)
        
      });
})


//delete
app.delete('/removeuser/:emailaddress',  (req, res) => {

  console.log(req.params.emailaddress)
  db.collection('users').deleteOne({email:req.params.emailaddress}, function(err, response) {
       res.send(response)
    
  });
})

//getall
app.get('/allusers',  (req, res) => {
     var cursor1
       db.collection('users').find().toArray(function(err, docs) {
         res.send(docs)
       })
   });


//update
   app.put('/update/:emailaddress',  (req, res) => {
  
      db.collection('users').findOneAndUpdate({email:req.params.emailaddress},{$set:req.body},function(err, docs) {
         res.send(docs)
      })
  });










