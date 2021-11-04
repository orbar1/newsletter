const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const path = require("path");
const https = require('https');

const app = express();
const mainHtmlPath = path.join(__dirname,"build","index.html");
// const mainHtmlPath = path.join(__dirname,"..","newsletter-back","build","index.html");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'build')));


app.get('/',(req,res)=>{
    res.sendFile(mainHtmlPath);
});


app.post('/',(req, res)=>{
    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const email = req.body.email;

   const data = {
    members: [
    {
        email_address: email,
        status : "subscribed",
        merge_fields : {
            FNAME : firstName,
            LNAME : lastName
        }
       }
    ]
   };
      
   
   const jsonData = JSON.stringify(data);
   const url = 'https://us7.api.mailchimp.com/3.0/lists/77b58cfe';

   const options = {
    method : "POST",
    auth : stam() 
   };

   const request = https.request(url,options,function(respsonse){

    if(respsonse.statusCode === 200){
        res.sendFile(path.join(__dirname,"build","success.html"));
    }else{
        res.sendFile(path.join(__dirname,"build","failed.html"));
    }

       respsonse.on("data", function(data){
           console.log(JSON.parse(data));
       });
   });

   

   request.write(jsonData);
   request.end();

});

app.post('/failed', (req, res)=>{
    res.redirect('/');
});

app.listen(process.env.PORT || 3001,function (){
    console.log("app is running on port 3001");
});
