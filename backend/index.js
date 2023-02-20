const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
mongoose.set('strictQuery', false);
require('./db/config');
const User = require('./db/User');
const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", async (req, resp)=>{
let user = new User(req.body);
let result = await user.save();

resp.send(result);// getting form or boday data in nodejs
})

app.listen(8000);


// const dbConnect = async () => {
// 	mongoose.connect('mongodb://localhost:27017/ecommerce');
// 	const PorductSchema = new mongoose.Schema({});
// 	const product = mongoose.model('users', PorductSchema);
// 	const data = await product.find();
// 	console.warn(data);
// };

// app.get("/", async (req, resp)=>{
//     resp.send("working");

// })
