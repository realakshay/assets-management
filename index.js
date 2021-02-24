const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

require("dotenv/config")
const app = express();

app.get("/", (req,res)=>{
    res.send("working fine")
})

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}, ()=>{
    console.log("Yeah Connected and its working");
})

app.listen(3001)