const express = require('express');
const nodemailer = require('nodemailer');
const bodyparser = require('body-parser');
const sendmail = require('./sendmail');
const app = express();

// View Engine = eJS
app.set('view engine', 'ejs');

// body parser
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());

// static folder
app.use('/public/', express.static(__dirname + "/public/"));
app.use('/images/', express.static(__dirname + "/images/"));
app.use('/scripts/', express.static(__dirname + "/scripts/"));

app.get('/', (req,res) => {
  res.render('index');
})

app.post('/send', (req,res) => {
  console.log(req.body);
  console.log("request recieved!");

  const output = `
  <p> You have new contact request</p>
  <h3> Contact Details</h3>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Surname: ${req.body.surname}</li>
  <li>Email: ${req.body.email}</li>
  </ul>
  <h3> Message </h3>
  <p> ${req.body.message} </p>
  `;

  sendmail.send(output);
  res.send('SEND');
})

app.listen(5000, function() {
  console.log("Listening on port 5000");
});
