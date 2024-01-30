var mongo=require("mongoose")
var userScheme=new mongo.Schema({
    image:String,
    name:String,
    category:String,
    price:String,
    rating:String
})
var user=mongo.model('food',userScheme);
module.exports=user;