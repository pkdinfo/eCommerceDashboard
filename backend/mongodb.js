const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dataBaseName = 'ecommerce';
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
	db = result.db(dataBaseName);
	return db.collection('cloths');
	//let response = await collection.find({ }).toArray();
	//console.log(response);
}

module.exports = dbConnect;