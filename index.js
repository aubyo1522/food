var mongo=require("mongoose");
var express=require("express")
var app=express();
var body=require("body-parser");
var admin=require("./routes/router");
const cors=require('cors');
app.use(cors());
mongo.set('strictQuery', true);
mongo.connect("mongodb+srv://Devil:ajay22@cluster0.krwqjvc.mongodb.net/food",()=>
{
    console.log("DB Connected!!!");
})
app.use(body.urlencoded());
app.use(express.json());
app.use(admin);
app.listen(3000,()=>
{
    console.log("Server Connected!!!");
})