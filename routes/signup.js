var express = require('express');
var router = express.Router();
//var MongoClient= require('mongodb').MongoClient;
//var db;

var fs = require('fs');

var credentials = [];
var cred_datapath = 'login_credentials.json';

//get data from .json file
try {
	var stats = fs.statSync(cred_datapath);
	var dataString = fs.readFileSync(cred_datapath);
	credentials = JSON.parse(dataString);
} catch (e) {
	console.log('Data File Does Not Exist...');
	fs.writeFileSync(cred_datapath, JSON.stringify([]));
}

router.get('/', function (req, res, next) {
	//console.log(credentials);
	res.render('signup');
	res.end();
	
});

router.post('/get_form', function (req, res, next) {

//get data from the sign up form
	var new_user = {
		firstname: req.body.fname,
		lastname : req.body.lname,
		username : req.body.uname,
		emailid  : req.body.email,
		password : req.body.password
	}
//write data to the database
	credentials.push(new_user);
//	console.log(credentials);
	fs.writeFileSync(cred_datapath, JSON.stringify(credentials));
	res.redirect('/login/');

// 	var URI = 'mongodb://ppatil11:prashant123@ds021711.mlab.com:21711/movieflix_db';
// 	MongoClient.connect(URI, function(err, db) {
// 		if(err){console.log(err)};
// 		var users = db.collection('users');
// 		users.insert(new_user, function(err, result){
// 			if (err) {console.log(err)};
// 		});
// 	});
// 	res.redirect('/login/');
// 	res.end();
	
 });


module.exports = router;