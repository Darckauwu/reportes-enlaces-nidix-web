var mysql = require('msql');

var con = mysql.createConnection({
	host: "209.145.60.126",
	user: "darcka",
	password: "020283*Rd"
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connected!")
});