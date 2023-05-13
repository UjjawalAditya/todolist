const express =require("express");
const app=express();
const bodyParser=require("body-parser");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var item=[];
var workitem=[];


app.get("/",function(req,res){
    var today=new Date();
    console.log(today);
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var currentday=today.toLocaleDateString("en-US", options);
    console.log(currentday);
    res.render("list",{ title: currentday,newitem: item});
 })
  app.post("/",function(req,res){
    let newitem=req.body.newitem;
    if(req.body.list=== "work")
    {
        workitem.push(newitem);
        res.redirect("/work")
    }
    else{
        item.push(newitem);
      console.log(item);
      res.redirect("/");

    }
     
    
 })
 app.get("/work",function(req,res){
    res.render("list",{ title: "work", newitem: workitem})
    
 })
 
app.listen(process.env.PORT||8080,function(){
    console.log("server is live at port 8080");
})
