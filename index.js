const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const deviceRoute = require("./routes/DeviceRoute");

require("dotenv/config")

const app = express();

app.use(bodyParser.json())

app.use("/device", deviceRoute)

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}, ()=>{
    console.log("Yeah Connected and its working");
})

app.listen(3001)