// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204
const fs=require('fs')
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use((req,res,next)=>{
	const logger=`${new Date().toLocaleString()}\n${req.method} ${req.path}-${req.ip}`
	console.log(logger)
	fs.writeFile('./log.txt',logger,()=>fs.readFile('./log.txt',(err,data)=>{
		if(err){
			console.error(err)
		}
		console.log(data.toString()+'\n')
	}))
	next()
})
console.log(process.env.PORT)
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
  
});


// your first API endpoint... 
/*
app.get("/api/timestamp/:timestamp", function (req, res) {
  let timestamp=req.params.timestamp
  res.json({unix:new Date(timestamp).valueOf(),utc:new Date(timestamp).toUTCString()})
});

app.get('/api/timestamp',(req,res)=>res.json({unix:new Date().valueOf(),utc:new Date().toUTCString()}))
*/
const api=require('./routes/timestamp')
app.use('/api/',api)
// listen for requests :)
var listener = app.listen(process.env.PORT||3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});	
