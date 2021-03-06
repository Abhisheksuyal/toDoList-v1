const express = require("express");
const bodyParser=require("body-parser");

const app=express();

var items=[];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get("/about",function(req,res){
  res.render("about");
});

app.get("/",function(req,res){
  var today = new Date();

    var options={
      weekday: "long",
      day: "numeric",
      month: "long"
    };
     var day = today.toLocaleDateString("en-us",options);

  res.render("list",{kindOfDay: day,newListItem: items});
});



app.post("/",function(req,res){
var item = req.body.rece;
items.push(item);
  res.redirect("/");
});

app.listen(3000,function(){
  console.log("server running on port 3000");
})
