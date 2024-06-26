const express = require("express");
const app = express();
const path = require("path");
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


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res)=>{
    res.send("Hello");
})

//user route
app.get("/user/:id", async (req,res)=>{
    let {id} = req.params;
    let user = await Detail.findById(id);
    res.render("index.ejs", {user});
})


app.listen(3000, ()=>{
    console.log("server is listing to port 3000");
})