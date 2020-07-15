require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const ejs = require('ejs');


const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', function(req, res){
 res.render('index');
});

app.post("/contact" , function(req,res){

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GUSER,
      pass: process.env.GPASS
    }
});

var mailOptions = {
  from: process.env.GUSER,
  to: process.env.TO,
  subject: 'You got a New Request',
  text: "New Request"+"\n"+
        'Name: '+ req.body.name+"\n"+
        'email: '+ req.body.email+"\n"+
        'Contact: '+ req.body.phone+"\n"+
        'Message: '+ req.body.message,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    res.setTimeout(4500, function(){
    res.send("Please Try Again");
  });
    res.redirect("/");
  } else {
    console.log('Email sent: ' + info.response);
    res.setTimeout(4500, function(){
    res.send("Request Sent Successfully");
  });
    res.redirect("/");
  }

});
});

app.get("/book" , function(req,res){
  res.render('book');
});

app.post("/bookapt" , function(req,res){

  // console.log(res.end(JSON.stringify(req.body)));

  // ejs.renderFile(__dirname + "/Hello.ejs", { name: name }, function (err, data) {

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GUSER,
      pass: process.env.GPASS
    }
});

var mailOptions = {
  from: process.env.GUSER,
  to: process.env.TO,
  subject: 'You got a New Appointment',
  text: "New Appointment"+"\n"+
        'First Name: '+ req.body.name+"\n"+
        'Last Name: '+ req.body.lname+"\n"+
        'email: '+ req.body.email+"\n"+
        'Contact: '+ req.body.Contact+"\n"+
        'State: '+ req.body.state+"\n"+
        'City: '+ req.body.city+"\n"+
        'Age: '+ req.body.age+"\n"+
        'Occupation: '+ req.body.occupation+"\n"+
        'Gender: '+ req.body.gender+"\n"+
        'Height: '+ req.body.height+"\n"+
        'Weight: '+ req.body.weight+"\n"+
        'Appointment For: '+ req.body.Appointment+"\n"+
        'Appointment Date: '+ req.body.Date+"\n"+
        'Health History: '+ req.body.message,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    res.setTimeout(4500, function(){
    res.send("Please Try Again");
  });
    res.redirect("/book");
  } else {
    console.log('Email sent: ' + info.response);
    res.setTimeout(4500, function(){
    res.send("Appointment Booked Successfully");
  });
    res.redirect("/");
  }

});
});

app.listen (process.env.PORT || 3000 , function () {
  console.log ("Server is running on port 3000.");
});
