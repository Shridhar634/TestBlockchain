
const Web3 = require('web3');
//var web3 = new Web3('http://localhost:8545');
console.log(web3);
const net = require('net');
var web3 = new Web3('http://127.0.0.1:8545/',net);
//console.log(web3)
//var acc = web3.eth.personal.newAccount('12345');
//console.log(acc);
// let account =  web3.eth.getAccounts()
// .then(console.log);
web3.eth.personal.unlockAccount("0x43cd2b40729333aad5138f09c3334bcd0480039e","12345",600000).then(console.log("unlocked"));
//web3.eth.personal.unlockAccount("0x59CC035e02b30014950bd9bbF551137fcdD4F8E8","12345",600000).then(console.log("unlocked"));

//web3.eth.personal.checkAllBalances().then(console.log);
//  var bal = web3.utils.fromWei(web3.eth.getBalance("0x65C8Db44ce6b70061529d2C9b313DEFC73E18e0d","ether"));
//  console.log(bal);
// //1> geth init genesis.json --datadir "blockchain"
//2> geth --datadir "blockchain" --rpc --rpcapi "eth,web3,miner,admin,personal,net" --rpccorsdomain "*" --nodiscover --networkid 12345
//geth --datadir "blockchain" --rpc --rpcapi "eth,web3,miner,admin,personal,net" --rpccorsdomain "*" --nodiscover --networkid 12345 --allow-insecure-unlock
//Truffle v5.0.19 (core: 5.0.19)
//0x59CC035e02b30014950bd9bbF551137fcdD4F8E8

//this.props.createPost(_content,_choice_1,_choice_2,_choice_3);
// const toAddress = '0x5278f471d565aed994c01d8EC5A812f8422f94Bb';
// const lip = '0x321BfE8155dcd3c0bA4000648bb777388cB7A2C6';
// const sendValue = web3.utils.toWei('10','ether');
// console.log(sendValue);
// const txn ={
// 	from: lip,
// 	to: toAddress,
// 	value: sendValue 
// }

// web3.eth.sendTransaction(txn,(error,hash) => {
// if(error) throw error;
// console.log(hash);
// });
//web3.eth.getBalance('f9e45d16fa92fb3e438017c2dcc9f66bb64f8291').then(console.log);
// <li key={key} className="list-group-item" >
//                        <p> {post.choice_1}</p>
//                     </li>
//                     <li className="list-group-item" >
//                        <p> {post.choice_2}</p>
//                     </li>
//                     <li className="list-group-item" >
//                        <p> {post.choice_3}</p>
//                     </li>