const root=(req,res)=>{
	res.json({unix:new Date().valueOf(),utc:new Date().toUTCString()})
}
const timestamp=(req,res)=>{
	let timestamp=req.params.timestamp
	let date
	if(!isNaN(timestamp)) date=new Date(parseInt(timestamp))
	else {
	  date=new Date(timestamp)
	}
	if(date.toString()==="Invalid Date") res.json({
		error:"Invalid Date"
	}) ;
	else res.json({unix:date.valueOf(),utc:date.toUTCString()})
}
module.exports={
  root,
  timestamp
}