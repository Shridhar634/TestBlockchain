import React, { Component } from 'react';
import App from './App';
import Main from './Main';
import Web3 from 'web3';
import Navbar from './Navbar';
import './App.css';
import logo from '../logo.png';
import SocialNetwork from '../abis/SocialNetwork.json';
import SignUp_2 from './SignUp_2';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
class View extends Component{

	async componentWillMount(){  
    await this.loadBlockchainData();  
  }
  
  async loadBlockchainData() {
        const web3 = new Web3('http://127.0.0.1:8545/');        
        //const accounts = await web3.eth.getAccounts();
        //this.setState({accounts});
        //console.log(accounts);        
        web3.eth.getAccounts().then(console.log);
        const account = this.props.acc1;
        this.setState({ account });
        const netId = await web3.eth.net.getId();
        const networkData = SocialNetwork.networks[netId];
        console.log(netId);
		console.log(web3.eth.getTransaction(account))
		         
//    	console.log(postCount)
    if(networkData){
        const socialNetwork =  web3.eth.Contract(SocialNetwork.abi,networkData.address);
                  
        console.log(socialNetwork);
         this.setState({socialNetwork });
          const postCount1 = await socialNetwork.methods.postCount1().call();
           this.setState({postCount1});
           console.log(postCount1);
          //const cnt = web3.eth.getTransactionCount(account);
           //this.setState({cnt});
         //console.log(cnt);
           const add = networkData.address;
          this.setState({add});
        console.log(add);

            for (var i = 1; i <= postCount1; i++) 
            {                   
            	const post = await socialNetwork.methods.posts(i).call();
            	console.log(post)
	            this.setState({                                               
	              posts: [...this.state.posts, post]
	            })
	            
              const extra = await socialNetwork.methods.extras(i).call();
              console.log(extra)
              this.setState({                                               
                extras: [...this.state.extras, extra]
              })
            }
            console.log({posts: this.state.posts});
            this.setState({ loading: false})
    }else{
            window.alert('contract detected');
    }
   
  }
  
  constructor(props){
    super(props)
    this.state = {
      account:'',
      socialNetwork: null,
      postCount1: 0,
      posts: [],
      extras: [],
      loading: true     
    } 
  }
	render() {
		return(
			<div>
        <div className="text-center mt-5">
        <h1>Staff/Teacher Administration </h1>
      
				<Link to="/Evaluation">
          <li >Evaluation</li>
        </Link>
        <Link to="/mail">
          <li >Send mails</li>
          </Link>
          				
				</div>
        {  this.state.loading 
		          ? <div id="loader" className="text-center mt-5"><p>Loading...</p></div> 
		          : <Main posts={this.state.posts} />		                  
				}          
        
			</div>
			);
	}
}

export default View;