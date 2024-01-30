var express=require("express")
var data=require("../model/usermodel");
var router=express.Router();

router.post("/create",async(req,res)=>
{
    const dat=await new data({
        image:req.body.image,
        name:req.body.name,
        category:req.body.category,
        price:req.body.price,
        rating:req.body.rating
    })
    dat.save();
    res.send({status:true,"Message":"New Product Addedd"})
})
router.get("/view",async(req,res)=>
{
    const dat=await data.find();
    res.send({status:true,"data":dat})
})
module.exports=router;