var express = require('express')
var app = express();
var assert = require('assert');
var http = require('http');
var server = http.Server(app);
var socketIO = require('socket.io');
var io = socketIO(server);
var fs = require('fs');
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 3000;

const path = require('path');
const formidable = require('formidable');
app.use(express.static(path.join(__dirname, '../dist/WeekSix')))
app.use('/images', express.static(path.join(__dirname, './images')));


// Boots up the server using http
server.listen(3000, () => {
  console.log('started on port: ${port}');
});

// Use connect method to connect to the server
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';


var insertUserDocument = function(db, callback) {
  var initialUser = {
    name: "super",
    email: "super@admin.com",
    role: "superAdmin",
    imagepath: "super.jpg"
  };

  db.collection("users").insertOne(initialUser, function(err, result) {
    assert.equal(err, null);
    callback();
  });
};


var insertGroupsDocument = function(db, callback) {
  var initialGroup = { name: "group1" };

  db.collection("groups").insertOne(initialGroup, function(err, result) {
    assert.equal(err, null);
    callback();
  });
};


// Connect to MongoDB on localhost:27017
MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log('connect fail');
    return;
  };
  var mydb = db.db('mydb');

  insertUserDocument(mydb, function() {
    db.close();
  });

  insertGroupsDocument(mydb, function() {
    db.close();
  });

  require('./routes/auth.js')(app, db);
  require('./routes/reg.js')(app, db);
  require('./routes/groupreg.js')(app, db);
  require('./routes/del.js')(app, db);
  require('./routes/groupdel.js')(app, db);
  require('./routes/users.js')(app, db);
  require('./routes/user.js')(app, db);
  require('./routes/groups.js')(app, db);
  require('./routes/userimage.js')(app, db);
  require('./routes/upload.js')(app, formidable);
  require('./socket.js')(app, io);
});

