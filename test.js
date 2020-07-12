require('dotenv').config();
const nodemailer = require('nodemailer');
const log = console.log;
var fs = require("fs");
var text = fs.readFileSync("./text.txt").toString('utf-8');
var textByLine = text.split("\n");
//console.log(textByLine);
//console.log(textByLine[0]);
console.log(textByLine.length);

console.log(Math.ceil(Math.random() * 100000000000000))
// ///Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
       			 pass: process.env.PASSWORD, 
        		 user: process.env.EMAIL 
          }
});

var from_ = 'sharrynagar1@gmail.com'
//var to_ = 'preetisnagarkar@gmail.com'
var account;
var password;
//var str;  'Your key is: '+ key+'\nYour password is: '+pass 
//console.log(str)

const Web3 = require('web3');
var web3 = new Web3('http://localhost:8545');
//console.log(web3);
const net = require('net');
var web3 = new Web3('http://127.0.0.1:8545/',net);
//console.log(web3);
 // account.then(val => {
 //          console.log(val); 
 //          acc=val;
 //           this.setState({val});
           
 //        });
 //        console.log(acc)

var acc;
var val;
//console.log(acc);

var cnt=0;
var from_ = 'sharrynagar1@gmail.com'
for(var i=0;i<textByLine.length;i++)
{	
		

		password = Math.ceil(Math.random() * 100000000000000);
		console.log(password)
		var acc ;//= textByLine[0];	
		
		web3.eth.personal.newAccount(toString(password)).then(ans => {
		 	//console.log(ans)
		 	//console.log(this.email)
		 	this.acc = ans;
			var text = fs.readFileSync("./text.txt").toString('utf-8');
			var textByLine = text.split("\n");
			console.log(cnt)
			
			console.log(textByLine[cnt]);
			
			str = 'Your key is: '+ ans+'\nYour password is: '+password;	
			//cnt = cnt+1;
			 let mailOptions = {
		    from: from_, // TODO: email sender
		    to: textByLine[cnt], // TODO: email receiver
		    subject: 'Nodemailer - Test',
		    text: str
		};
		transporter.sendMail(mailOptions, (err, data) => {
		    if (err) {
		      //  console.log(err)
		        return log('errror ocurrs..',err);
		    }
		    return log('Email sent!!!');
		    //console.log('sent...')
		});
			cnt++;
		 })
	//	 account.then(val => {
	//	console.log(this.acc)
           //  console.log(val); 
        // this.acc = val;
			// str = 'Your key is: '+ val+'\nYour password is: '+password;
   //  		acc = val;
    		       
  //   		  let mailOptions = {
		//     from: from_, // TODO: email sender
		//     to: textByLine[i], // TODO: email receiver
		//     subject: 'Nodemailer - Test',
		//     text: str
		// };
		// transporter.sendMail(mailOptions, (err, data) => {
		//     if (err) {
		//       //  console.log(err)
		//         return log('errror ocurrs..',err);
		//     }
		//     return log('Email sent!!!');
		//     //console.log('sent...')
		// });			               
        	//	console.log(textByLine[i])
      //  });
		//	console.log(acc)

			//str = 'Your key is: '+ val+'\nYour password is: '+password;

		// let mailOptions = {
		//     from: from_, // TODO: email sender
		//     to: textByLine[i], // TODO: email receiver
		//     subject: 'Nodemailer - Test',
		//     text: str
		// };
		// //Step 3
		// transporter.sendMail(mailOptions, (err, data) => {
		//     if (err) {
		//         console.log(err)
		//         return log('errror ocurrs..',err);
		//     }
		//     return log('Email sent!!!');
		//     console.log('sent...')
		// });			           
	
    
}
