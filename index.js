const express = require("express");
const bodyParser = require("body-parser");

const app =express();
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var name = req.body.user;
    var pass = req.body.pass;
    console.log("name "+ name +" pass "+ pass);
    res.sendFile(__dirname+"/home.html");
    var count=30;
    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
    function timer()
    {
      count=count-1;
      if (count <= 0)
      {
         clearInterval(counter);
         return;
      }

     document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
    }
});

app.listen(4000, function(){
  console.log("server ready at 4000");
});
