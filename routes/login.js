var express = require('express');
var router = express.Router();
var _ = require('underscore');
var fs = require('fs');

var credentials = [];
var cred_datapath = 'login_credentials.json';
var movie_datapath = 'movielist.json';

//get data from movielist.json file
try {
	var stats1 = fs.statSync(movie_datapath);
	var dataString1 = fs.readFileSync(movie_datapath);
	movieData = JSON.parse(dataString1);
} catch (e) {
	console.log('Data File Does Not Exist...');
	fs.writeFileSync(movie_datapath, JSON.stringify([]));
}

router.get('/', function (req, res, next) {
	res.render('login');
	res.end();
	
});

router.get('/get_form', function(req, res, next){
	 var username = req.query.uname;
	 var password = req.query.password;
	//get data from login_credentials.json file
try {
	var stats = fs.statSync(cred_datapath);
	var dataString = fs.readFileSync(cred_datapath);
	credentials = JSON.parse(dataString);
} catch (e) {
	console.log('Data File Does Not Exist...');
	fs.writeFileSync(cred_datapath, JSON.stringify([]));
}

//	console.log(username , password);
//	console.log(movieData[0].Title);
	
	for (var i = 0; i < credentials.length; i++) {
//		console.log(credentials.length, credentials[i].username, credentials[i].password);
		if (username == credentials[i].username
		 	&& password == credentials[i].password){
			res.render('home', {data : movieData});
			//res.end();
		}	
	}
});

module.exports = router;