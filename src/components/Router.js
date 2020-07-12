import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Evaluation from './Evaluation'; 
import Form from './Form';
import Create from './Create';
import SignUp_2 from './SignUp_2';
import SignUp from './SignUp';
import View from './View';
import App from './App';
import Nav from './Nav';
import mail from './mail';
import { Link } from 'react-router-dom';


function Router_(){
	return(
		<div>
			
			<Router>
				<Switch>
					<Route path="/app" component={App} />
					<Route path="/login" component={SignUp}/>												
					
					<Route path="/create" component={Create}/> 					
					<Route path="/SignUp_2" component={SignUp_2} />					
					<Route path="/evaluation" component={Evaluation}/>
					<Route path="/view" component={View}/>
					<Route path="/mail" component={mail}/>
					<Link to="/SignUp_2">
					<li >Link too Administrator</li>
				</Link>

				</Switch>								
			</Router>
			
			

			
			
								
			</div>	
		);
			
} 



export default Router_;