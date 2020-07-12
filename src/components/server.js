var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
//var web = require('web3')
const Web3 = require('web3');
//var web3 = new Web3('http://localhost:8545');
//console.log(web3);
const net = require('net');
var web3 = new Web3('http://127.0.0.1:8545/',net);
const creds = require('./config');
web3.eth.personal.unlockAccount("0x43cd2b40729333aad5138f09c3334bcd0480039e","12345",600000).then(console.log("unlocked"));
var transport = {
    service: 'gmail',
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)
const fs = require("fs");
//console.log(web3)
//var web = require('web3')
 
var text = fs.readFileSync('./text.txt').toString('utf-8');
 const textByLine = text.split("\n");
console.log(textByLine);
console.log(textByLine[0]);
console.log(textByLine.length);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
var str;
var link; 

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `
  var cnt=0;
for(var i=0;i<textByLine.length;i++)
{ 

    password = Math.ceil(Math.random() * 100000000000000);

    key = web3.eth.personal.newAccount(toString(password));

    link  = 'http://localhost:3000/login'; 
    key.then(val=>{

    str = ' key is:-- '+ val + '\n  password is:-- ' + password + '\n http://localhost:3000/login \n' + content;

  var mail = {
    from: name,
    to: textByLine[cnt],  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: str
  }

      transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            status: 'fail'
          })
        } else {
          res.json({
           status: 'success'
          })
        }
      })
      cnt++;
})

}      
    })

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)