var express = require('express');
var mongodb = require('mongodb');
var md5=require('md5');
var app = express();
var mongodbURL = 
'mongodb://jean4445jean4445:jean4445@ds011705.mlab.com:11705/userinformation';

var myDB;
mongodb.MongoClient.connect(mongodbURL, function(err, db) {
if (err) {
console.log(err);
} else {
myDB = db
console.log('connection success');
}
});

app.get('/api/insert',function(request,response){
	var item={
	name:request.query.name,
	account:request.query.account,
	password:md5(request.query.password),
	sex:request.query.sex,
	birthday:request.query.birthday,
	height:request.query.height,
	weight:request.query.weight,
	email:request.query.email,
	phone:request.query.phone
	}
	var collection=myDB.collection('user_data');
	collection.insert(item,function(err,result){
	if(err){
	response.status(406).end();
	}else{
		response.type(application/json);
		response.status.send(result);
	}
});
});
	
app.listen(5000);
/* app.get('/api/test', function(request, response) {
var collection = myDB.collection('user_data');
collection.find({}).toArray(function(err, docs) {
if (err) {
response.status(406).end();
} else {
response.type('application/json');
response.status(200).send(docs);
response.end();
}
});
});
app.listen(5000); */
