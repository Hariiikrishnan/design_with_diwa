const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine","ejs");

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
   res.render("home");
});

app.get("/flyer",function(req,res){
    res.render("flyer");
})
app.get("/logo",function(req,res){
    res.render("logo");
})
app.get("/card",function(req,res){
    res.render("card");
})
app.get("/invitation",function(req,res){
    res.render("invitation");
})
app.get("/cover",function(req,res){
    res.render("cover");
})
app.listen(3000,function(req,res){
    console.log("Server Started");
})