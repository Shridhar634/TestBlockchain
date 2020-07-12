// require('babel-register');
// require('babel-polyfill');
//const  HDWalletProvider = require("@truffle/hdwallet-provider");
//var mnemonic = "orange apple banana ...";
//var Web3 = require('web3');
// var appCred = "a0hjae4h5t:QDODAGtVox05UiiYaQAXvl2QEQm9KE4hLYayq5e-ifA";
// var host = "https://a0hjae4h5t:QDODAGtVox05UiiYaQAXvl2QEQm9KE4hLYayq5e-ifA@a0cdznffzi-a0mw1pypln-rpc.au0-aws.kaleido.io";
module.exports = {
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',  
  networks: {
     development: {
    //   provider: () => {
    //     return new Web3("https://a0hjae4h5t:QDODAGtVox05UiiYaQAXvl2QEQm9KE4hLYayq5e-ifA@a0cdznffzi-a0mw1pypln-rpc.au0-aws.kaleido.io",100000);
    //   },
      
       host:"127.0.0.1",
       port:8545, 
       network_id: "*",
       gasPrice:0
      //gas: 0x800000
        
     }
//      ,
//     ropsten: {      
//       provider:  function() {return new HDWalletProvider("hollow onion stand recall frozen crash rose mule satoshi slam dice midnight","https://ropsten.infura.io/v3/953c9596d5a44bbd948cc238b1d4b3bc")
// },      network_id: 3,         
//         gas: 1000000000000000000,   
//         gasPrice: 2500000000000
// // //      from: '0x00D6aec51C4c3379596162EC382d6797185B7225'
//       // host:"localhost",
//       // port:8545,
//       // network_id: "*",         
//       // gas: 1000000000000000000,  
//pragma experimental ABIEncoderV2; 
//       // gasPrice: 2500000000000
//     }
  },

  compilers: {
    solc: {
      optimizer: {
        version: "0.5.19",
        enabled: true,
        runs: 1000

      }
    }
  }
}
