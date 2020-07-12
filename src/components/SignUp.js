import React, { Component } from 'react';
import SocialNetwork from '../abis/SocialNetwork.json';
import Web3 from 'web3';
import App from './App';
import './App.css';
class SignUp extends Component{

  	checkAccount(acc,password){
  		  const web3 = new Web3('http://127.0.0.1:8545/');
  		  web3.eth.getAccounts().then(console.log)
        web3.eth.getBalance(acc).then(console.log);
        this.setState({acc});
        const acc1 = acc;
        console.log(acc1);
        const result = web3.utils.isAddress(acc1);
        console.log(result)
        if(result == true)
         {
              this.setState({result});           
              console.log(result)   
              
          
         }else{
          alert("Invalid account...");
    window.location.reload(false);
          

         }
           web3.eth.personal.unlockAccount('0x43Cd2b40729333aaD5138f09C3334bCd0480039E',"12345",6000000).then(console.log('1 unlockded'));
                web3.eth.personal.unlockAccount(acc,toString(password),6000000).then(console.log('2 unlockded'));
               
                const txn ={
                      from: '0x43Cd2b40729333aaD5138f09C3334bCd0480039E',
                      to: acc,
                      gasLimit:21000,
                      gasPrice:0,
                      value:  web3.utils.toWei('10','ether')
                }
                console.log(txn);
                web3.eth.sendTransaction(txn,(error,hash) => {
                if(error) throw error;
                console.log(hash);
                });
                        console.log('Created...');
              web3.eth.getBalance('0x43Cd2b40729333aaD5138f09C3334bCd0480039E').then(console.log); 
}  	

  	handlePk = (event) => {
  		this.setState({
  			pk: event.target.value,
        
  		})
  	}

    handlePassword = (event) => {
      this.setState({
      password: event.target.value
      })
    }
 
  	handleSubmit = (event)  => {
  		 this.setState({visible: false}) 
  		 this.checkAccount(this.state.pk,this.state.password);
  		 event.preventDefault();
  	} 

    constructor(props){
      super(props)
      this.state = {
        pk: '',
        password: '',
        visible: true
      }
    }

	render(){
		return(
        <div>
        {this.state.visible ?
					<div class="login-form">
						 <div >
                  <h2 class="text-centre">Student Feedback  </h2>
              </div>
            <form onSubmit={this.handleSubmit}>
						<h5 class="text-centre">Log in</h5>
						
						<div class="form-group">
            <input id="check" 
							type="text"  
							name="key" 
							value={this.state.pk}   
							onChange={this.handlePk}
              class="form-control" placeholder="Public-Key" required="required"					>
						</input>
            </div>
						<div class="form-group">
            <input id="check1" 
              type="text"  
              name="password" 
              value={this.state.password}   
              onChange={this.handlePassword}          
              class="form-control" placeholder="password" required="required">
            </input>
            </div>
            <br></br>
           
						    <button type="submit">Sign Up</button>
                    
						</form>
        </div>
            : null
        }    
						{
                this.state.result
    						?	<App acc={this.state.acc} />
    						:   null						
            }		
            
					</div>			
			);
	}
}

export default SignUp;