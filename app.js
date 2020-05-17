var nodemailer = require('nodemailer');
var express = require('express');
var app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/send-email-node', function (req, res) {

  const from = req.body.email;
  const message = req.body.mensaje;
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'facu@gmail.com',
      pass: 'facu'
    }
  });

  var mailOptions = {
    from,
    to: 'facu@gmail.com',
    subject: 'Sending Email using Node.js',
    text: message
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      return res.json({
        ok: false, 
        error
      });
    } else {
      return res.json({
        ok: true,
        detail: 'Email sent: ' + info.response
      });
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});




