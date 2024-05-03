const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Detail = require("./models/detail.js");

main()
.then(()=>{
    console.log("Database connected");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/teambuilder');
}

app.get("/", (req, res)=>{
    res.send("Hello");
})


app.listen(3000, ()=>{
    console.log("server is listing to port 3000");
})