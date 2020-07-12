import React, { Component } from 'react';
import Web3 from 'web3';
import SocialNetwork from '../abis/SocialNetwork.json';
import { Link } from 'react-router-dom';
import './App.css';
class Create extends Component {
	async componentWillMount(){     
    await this.loadBlockchainData();       
  }	

  async loadBlockchainData(){
  	
  	const web3 = new Web3('http://127.0.0.1:8545/');
  	this.setState({web3});
  	const netId = await web3.eth.net.getId();
  	console.log(netId);
    const networkData = SocialNetwork.networks[netId];       
    console.log(networkData)
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    //const account;
    this.setState({ account: accounts[0] });
    if(networkData)
    {	
    const socialNetwork = new web3.eth.Contract(SocialNetwork.abi,networkData.address,{
          from: accounts[0],
          gas: 3000000
         });
    this.setState({socialNetwork}); 
	 }
 }

  create(password){
  	    const web3 = new Web3('http://127.0.0.1:8545/');
   	    console.log(password);
        var str;
        var account;
        var acc;
        var val;
        account = web3.eth.personal.newAccount(password);
        //console.log(account);
         const sendValue = web3.utils.toWei('10');
     console.log(sendValue);
    
        account.then(val => {
          console.log(val); 
          acc=val;
           this.setState({val});
           
        });
        console.log(acc)
            
            
  }


  constructor(props){
  		super(props)
  		this.state = {
  			pk: '',
  			socialNetwork: null,
  			emailCount: 0,
  			emails: [],
  			loading: false,
        acc:''
  		}
  	}

  	handlePk = (event) => {
  		this.setState({
  			pk: event.target.value
  		})
  	}
 
  handleSubmit = (event)  => {  		
  		 this.create(this.state.pk);
  		 event.preventDefault();
  	}

  render(){

  	return(
      <div>
  		<div className="text-center mt-5">
        <h1>Staff/Teacher Administration </h1>
          
      
          <Link to="/create">
          <li>Create Account</li>
          </Link>
          <Link to="/SignUp_2">
          <li >Log in</li>
          </Link>
          
      
      </div>  
  			 <div class="login-form">
        <h5 class="text-centre ">Please copy and store public ID and Password safe </h5>

        <form onSubmit={this.handleSubmit}>
  			<label><b>Set Password here</b></label>
						<input id="check" 
							type="text"  
							name="key" 
							value={this.state.pk}   
							onChange={this.handlePk}
                class="form-control" placeholder="Set Password" required="required"   >
					 	</input>
						<br></br>
  				<button type="submit">Create Account</button>
  			</form>
        </div>
           <div class="login-form">
           <h5>{this.state.val}</h5>
           </div>
                     
  		</div>
  		);
  }
}

export default Create;