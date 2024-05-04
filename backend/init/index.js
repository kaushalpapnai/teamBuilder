const mongoose = require("mongoose");
const initData = require("./data.js");
const Detail = require("../models/detail.js");

main()
.then(()=>{
    console.log("Database connected");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/teambuilder');
}

const initDB = async ()=>{
    await Detail.deleteMany({});
    await Detail.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();