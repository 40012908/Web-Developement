var express = require('express');
var app = express();
var booklist = require("./books.json");
app.get('/',function(req,res){
    res.send('Welcome to express')
});
app.listen('3008',function(){
    console.log('server running in port 3000');
});

//url should be https://localhost:4001/search/Innova
    app.get("/search/:choice",function(req,res){
    var cab = req.params.choice;
    res.send("Your car Choice is ",cab)
   })
    
   //url should be https://localhost:4001/search/Innova/AC
   app.get("/searchCab/:choice/:type",function(req,res){
    var cab = req.params.choice;
    var cabType = req.params.type;
    res.send("Your car Choice is "+cab+' with '+cabType);
   });  
// url http://localhost:3006/searchCabs/Innova/AC
   app.get("/searchCabs/:choice/:type",function(req,res){
        var cab = req.params;
        res.send(cab);
   });


   app.get("/showBooks",function(req,res){
       res.send(booklist);
   });