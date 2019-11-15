const MongoClient = require('mongodb').MongoClient;
const express = require('express')

// Connection URL
const url = 'mongodb+srv://admin:admin@cluster0-52b8v.mongodb.net/test?retryWrites=true&w=majority';
 
// Database Name
const dbName = 'Phonebook';
 
// Create a new MongoClient
const client = new MongoClient(url);
module.exports =client
module.exports.dbName1 = dbName
// Use connect method to connect to the Server

  
  

  