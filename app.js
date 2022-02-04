const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");



const app=express();

var port=process.env.PORT || 7000;

var path = require("path");

app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({
  extended:true
}));
 const db= 'mongodb+srv://new_user2002:sathvik123@nodetuts.ugklg.mongodb.net/nodetuts?retryWrites=true&w=majority'
mongoose.connect(db, {useNewUrlParser:true});
const userSchema=new mongoose.Schema({
   email:String,
   password:String,
});






const secret="Thisisourlittlesecret.";

const User=new mongoose.model("User", userSchema );



app.get("/", function(req,res){
    res.sendFile(path.join(__dirname+ '/chillpill.html'));
  });
  
  app.get("/chillpill2", function(req,res){
    res.sendFile(path.join(__dirname+ '/chillpill2.html'));
  });  
  
  app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname+ '/login.html'));
  });
  
  app.get("/register", function(req,res){
    res.sendFile(path.join(__dirname+ '/register.html'));
  });
  app.get("/index", function(req,res){
    res.sendFile(path.join(__dirname+ '/index.html'));
  });
  app.get("/doctors", function(req,res){
    res.sendFile(path.join(__dirname+ '/doctors.html'));
  });
  app.get("/map", function(req,res){
    res.sendFile(path.join(__dirname+ '/map.html'));
  });
  app.get("/map-2", function(req,res){
    res.sendFile(path.join(__dirname+ '/map-2.html'));
  });
  
  app.post("/register", function(req,res){
    const newUser=new User({
      email:req.body.username,
      password:req.body.password,
    });
    newUser.save(function(err){
      if (err){
        console.log(err);
      }
      else{
        res.sendFile(path.join(__dirname+ '/chillpill2.html'));
      }
    });
  });
  
  app.post("/login", function(req,res){
    const username=req.body.username;
    const password=req.body.password;
  
    User.findOne({email:username}, function(err, foundUser){
      if (err){
        console.log(err);
      }else{
        if (foundUser){
          if (foundUser.password===password){
            res.sendFile(path.join(__dirname+ '/chillpill2.html'));
          }
      }
      }
    });
  });

app.listen(port,function() {
    console.log("Server started on port 7000.");
  });
