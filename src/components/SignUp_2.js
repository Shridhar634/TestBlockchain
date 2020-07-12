import React, { Component } from 'react';
import Web3 from 'web3';
import View from './View';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import mail from './mail';
class  SignUp_2 extends Component{

	async componentWillMount(){
     await this.signAccount();
     await this.createAccount();	
    }
  	 
    async createAccount()
    {
      var web3 = new Web3('http://127.0.0.1:8545/');      
    }

     async signAccount()
  	 {
	  			var web3 = new Web3('http://127.0.0.1:8545/')
	 	 	   	const array = web3.eth.getAccounts();
	  			console.log(array)
  	 }

  	checkAccount(acc,password){
  		  var web3 = new Web3('http://127.0.0.1:8545/');
  		  
  		  const acc1 = acc;
  		  console.log(acc1)
  		  
        var result = web3.utils.isAddress(acc1)
        console.log(result)
        if(result == true)
         {
              this.setState({result});           
              web3.eth.personal.unlockAccount(acc,toString(password),6000000).then(console.log('2 unlockded'));
       
         }else{
          window.alert("Invalid Account")
         }
  		  this.setState({result})
  		  console.log()
  		  this.setState({acc1})
  		  //const pKey = Buffer.from(acc,'hex');
        const account = this.props.acc1;

  	}

  	constructor(props){
  		super(props)
  		this.state = {
  			pk: '',
        visible: true
  		}
  	}

  	handlePk = (event) => {
  		this.setState({
  			pk: event.target.value
  		})
  	}
 
    handlePassword = (event) => {
      this.setState({
      password: event.target.value
      })
    }

  	handleSubmit = (event)  => {
  		
  		 this.checkAccount(this.state.pk);
  		 this.setState({visible:false});
       event.preventDefault();
  	} 

	render(){
		return(
					<div>
    {this.state.visible ?    
      <div>
          <div className="text-center mt-5">
          <h1>Staff/Teacher Administration </h1>
          
          <div class="form-group" class="text-centre">
          
          <Link to="/create">
            <li>Create Account</li>
          </Link>
            <Link to="/SignUp_2">
              <li >Log in</li>
            </Link>
              
          
          </div>
          </div>
      </div>   
      :null 
    }  
         
      {this.state.visible ?    
        <div class="login-form">
             <div>
                 
              </div>
          <form onSubmit={this.handleSubmit}>
					<h5 class="text-centre">Log in</h5>
											
            <div class="form-group">
						<input id="check" 
							type="text"  
							name="key" 
							value={this.state.pk}   
							onChange={this.handlePk}
              class="form-control" placeholder="Public-Key" required="required" 
            >
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
						<button type="submit" >Sign Up</button>
                    
          </form>
        </div>
        : null  
      }  
            {this.state.result
                ? <View acc1={this.state.acc1} /> 
                :  null            
          }     			
			</div>
      );
	}
}

export default SignUp_2;