const express = require("express");
const mongoose= require("mongoose");
const bodyParser=require("body-parser");
const ejs = require("ejs");
const _=require("lodash");
const app=express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/RegisterDB",{useNewUrlParser:true});

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    Password:String
    
})
const User=mongoose.model("User",userSchema)


//Router
app.post('/login',function(req,res){
 const {email,password}=req.body;
 user.findOne({email:email}),(err,user)=>
if(user){
    res.send()
}
})

app.post('/register',function(req,res){
const {name,email,Password}=req.body;
    user.findOne({email:email}),(err,user)=>{
        if(user){
                res.send({message:"User already register"})
            }else {
                const user= new User({
                    email,
                    Password,
                })
                user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"successfully Registerd"});
                }
            })
        }
    }

});
  

app.listen(3000,function(){
    console.log("server is runing at port 3000")
})