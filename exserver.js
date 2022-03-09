const express = require('express');
const app = express();
const fs = require("fs");

const time = {
	"time3" : {
		 "time" : "Its bedtime"
	}
}

app.get('/times', function (req, res) {
   fs.readFile( __dirname + "/" + "times.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.post('/addTime', function (req, res) {
	// First read existing users.
	fs.readFile( __dirname + "/" + "times.json", 'utf8', function (err, data) {
		 data = JSON.parse( data );
		 data["time3"] = time["time3"];
		 console.log( data );
		 res.end( JSON.stringify(data));
	});
})


const server = app.listen(3000, function () {
  // const host = server.address().address
   const port = server.address().port
   console.log(`Example app listening on port ${port}`)
})