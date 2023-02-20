const express = require("express");
const dbConnect = require('./mongodb');
const app = express();

app.get("/", async (req, resp)=>{
    resp.send("working");
    data = await data.find().toArray();
    console.log(data)

})

app.listen(5000);