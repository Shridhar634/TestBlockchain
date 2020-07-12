import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import SocialNetwork from '../abis/SocialNetwork.json';
import Main from './Main';
import Form from './Form';
import Web3 from 'web3';
import asd from 'web3-eth';
import Tx from 'ethereumjs-tx';
import ipfs from 'ipfs-http-client';
import Demo from './Demo';
import Fs from "fs";
//import email from './email';
//import {text} from './text.txt';
class App extends Component {

  async componentWillMount(){  
   
    await this.loadBlockchainData();  
    //window.lol();     
  }
  
  async loadBlockchainData() {

        const web3 = new Web3('http://127.0.0.1:8545/');        
        const accounts = await web3.eth.getAccounts();        
        this.setState({web3});
        //console.log({text});
        //const account = this.props.;
        //this.setState({account});
        const acc = this.props.acc;
        console.log(acc);
        
        this.setState({acc});
          
        const netId = await web3.eth.net.getId();
        
        const networkData = SocialNetwork.networks[netId];
        this.setState({networkData});
        console.log(netId);
         console.log(networkData);
      //    const cnt = web3.eth.getTransactionCount(account);
        //   this.setState({cnt});
         //console.log(cnt);
         const temp = web3.utils.toHex(web3.utils.toWei('47','gwei'));
           this.setState({temp});
          const add = networkData.address;
          this.setState({add});
        console.log(add);
        const set =web3.eth; 
        console.log(set);
        const val = web3.utils.toHex(web3.utils.toWei('1','ether'));
         this.setState({val});
        const limit = web3.utils.toHex(21000);
         this.setState({limit});

        const temp_ = web3.utils;
        this.setState({temp_});
                
    if(networkData){
          const socialNetwork = new web3.eth.Contract(SocialNetwork.abi,networkData.address,{
          from: acc,
          gas: 3000000
         });
       
        console.log(socialNetwork);
         this.setState({socialNetwork });
           const postCount1 = await socialNetwork.methods.postCount1().call();
           this.setState({postCount1});

                     console.log(postCount1);
            const cnt=0;
            this.setState({cnt})
            web3.eth.getTransactionCount(acc).then(console.log);
            // if(web3.eth.getTransactionCount(acc).then(console.log) == 1 )
            // {
                
            // }
            const res=false;
            this.setState({res});         
            for (var i = 0; i <= postCount1; i++) {       
            
            const post = await socialNetwork.methods.posts(i).call();
              
            this.setState({                                               
              posts: [...this.state.posts,post]
            })
            
            //console.log({posts: this.state.posts});

            const extra = await socialNetwork.methods.extras(i).call();
              
            this.setState({                                               
              extras: [...this.state.extras,extra]
            })
            //console.log(post.teacher)
            //console.log(this.state.acc)

                        
          }
          const str=0;
          var imp;
          const obj = web3.eth.getTransactionCount(acc);
          obj.then(str => {
              imp = str;
               console.log(str) 
              this.setState({str});
              if(str>=1)
              {
                this.setState({result:true});
                this.state.result = true;

              }
              console.log(this.state.result);    
          })
          //console.log(this.str)
          // if( > 1)
          //         {
          //           console.log('...');
          //           // this.state.res = false;
          //          // this.setState({result:false});
          //           this.state.result = true;
          //         }
          //console.log(this.state.result)
             // console.log({posts: this.state.posts});
              //console.log({extras: this.state.extras});
              
            //this.setState({ loading: false})
          //  console.log(res);
      
    }else{
            window.alert('contract detected');
    }
    //window.lol();
  //  email();
   // other();
}
  createPost(_content,_choice_1,_choice_2,_choice_3,_choice_4,_choice_5,_choice_6,_choice_7,_choice_8,_choice_9,_choice_10){
    //this.setState({loading: false})
      console.log(this.state.acc)
    this.state.socialNetwork.methods.createPost(_content,_choice_1,_choice_2,_choice_3,_choice_4,_choice_5,_choice_6,_choice_7,_choice_8,_choice_9,_choice_10).send({from: this.state.acc})
    .once('receipt',(receipt) =>{
      //this.setState({result: true})
      console.log(receipt)
    })       
      //this.setState({result: false})          
  }
  
  constructor(props){
    super(props)
    this.state = {
      acc:'',
      socialNetwork: null,
      postCount1: 0,
      extras: [],            
      posts: [],
      
      result:false      
    }
    this.createPost = this.createPost.bind(this);
  }
   
  render() {
  return(   
     <div>   
                 
            {this.state.result 
                     ? <div id="loader" className="text-center mt-5"><p>You already submitted the feedback...</p></div>
                     : <Form createPost={this.createPost} />
            }
                           
        </div>
       );                     
}
}
export default App;