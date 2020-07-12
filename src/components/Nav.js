import React from 'react';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SignUp from './SignUp';


 
function Nav() {
	return(

		<nav>

		<div className="text-center mt-5">
			<h1>Staff/Teacher Administration </h1>
		</div>
			<ul>
			<Link to="/Evaluation">
				<li>Evaluation</li>
			</Link>
				<Link to="/Views">
					<li>Comments</li>
				</Link>					
			</ul>
		</nav>
	);
}


export default Nav;